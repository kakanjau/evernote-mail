var email = require('emailjs');
var md = require('markdown').markdown;

/*
 * mailOpts:{
 *   user  
 *   password  
 *   host  
 *   ssl
 *   from
 * }
 *
 * evernoteOpts:{
 *   mail
 * }
 * 
 * articleOpts:{ 
 *   title 
 *   notebook
 *   tags
 *   content
 * }
 *
 */

var caller = function(callback) {
  if (typeof(callback) == 'function') {
    var args = Array.prototype.slice.call(arguments);
    args.shift();

    callback.apply(null, args);
  }
};

var _error = function(msg, code, error){
    var err = new Error(mes);
    err.code = code;
    error && (err.previous = error);

    return err;
}

function enmail(mailOpts, evernoteOpts, articleOpts, callback){
    var server = email.server.connect(mailOpts);
    var from = mailOpts.from;
    var to = evernoteOpts.mail;
    var title = articleOpts.title || 'evernote-mail_'+Date.now();
    var notebook = articleOpts.notebook || 'evernote-mail';
    var tags = articleOpts.tags || [];
    var contentType = articleOpts.contentType || 'text';
    var content = articleOpts.content;

    var subject = [title, '@'+notebook, '#'+tags.join(' #')].join(' ');

    // switch(contentType){
    //     case 'md':
    //     case 'markdown':
    //         content = md.toHTML(content);
    //         break;
    //     default:

    // }

    var message = {
        from: from,
        to: to,
        subject: subject,
        text: content
    };

    server.send(message, callback);
}

exports.evernote_mail = enmail;
# evernote-mail
一个简答的模块，利用evernote的邮件功能，给自己的evernote账户新增文章。

## 使用方法

    var enmail = require('evernote-enmail').evernote_mail;
    var mailOpts = {
        user: '',  // 自己邮箱的用户名 
        password: '',  // 自己邮箱的密码
        host: '', // 自己邮箱的stmp地址
        ssl: , // boolean值
        from: '' // 邮箱的地址，格式为 xxx<xxx@xxx.xxx>
    };

    var evernoteOpts = {
        mail: '' // 自己evernote邮箱的地址，可以在evennote的帮助 -> 我的账户页中看到
    };

    var articleOpts = {
        title: '', // 文章标题
        notebook: '', // evernote笔记本名称(必须是已经存在的笔记本)
        tags: [], // 文章的标签
        content: '' // 文章内容
    };

    // 调用
    enmail(mailOpts, evernoteOpts, articleOpts, callback);

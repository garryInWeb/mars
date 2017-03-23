# 数据库字段初版

[github](https://github.com/Gilbertat)
假设数据库为Mysql

``` sql
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
    `user_id` varchar(25) NOT NULL COMMENT '用户ID, 主键',
    `user_email` varchar(25) NOT NULL COMMENT '用户邮箱',
    `user_password` varchar(128) NOT NULL COMMENT '用户密码',
    PRIMARY KEY(`user_id`)
)

DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`(
	  `user_id` varchar(25) NOT NULL COMMENT `用户ID，主键`,
    `user_nick` varchar(50) NOT NULL DEFAULT `` COMMENT `用户昵称`,
    `user_reg` bigint(16) NOT NULL COMMENT '用户注册时间',
    `user_reg_type` tinyint DEFAULT NULL COMMENT '用户注册类型 可能有邮箱微信微博等多种渠道',
    'user_last_login' bigint(16) DEFAULT NULL COMMENT '用户上次登录时间',
    `user_recent_login` bigint(16) DEFAULT NULL COMMENT '用户本次登录时间',
    `user_blog_num` int(255) DEFAULT 0 COMMENT '用户博客文章数量',
    FOREIGN KEY(`user_id`) REFERENCES users(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE
)

```
欢迎更改与添加




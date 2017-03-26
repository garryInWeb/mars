## 数据库

``` sql

DROP TABLE IF EXISTS `mars_users`;

CREATE TABLE `mars_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) NOT NULL DEFAULT '' COMMENT '用户名',
  `user_pass` varchar(64) NOT NULL DEFAULT '' COMMENT '登录密码',
  `user_email` varchar(100) NOT NULL DEFAULT '' COMMENT '用户邮箱',
  `user_mobile` varchar(16) DEFAULT NULL COMMENT '用户手机',
  `user_nickname` varchar(50) DEFAULT '' COMMENT '用户昵称',
  `user_url` varchar(100) DEFAULT '' COMMENT '用户个人网站',
  `avatar` varchar(255) DEFAULT 'avatar.png' COMMENT '用户头像',
  `sex` smallint(1) DEFAULT '0' COMMENT '性别；0：保密，1：男；2：女',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `signature` varchar(255) DEFAULT NULL COMMENT '个性签名',
  `last_login_ip` int(10) DEFAULT NULL COMMENT '最后登录的ip',
  `last_login_time` datetime DEFAULT '2017-03-26 00:00:00' COMMENT '最后登录时间',
  `login_times` int(11) DEFAULT NULL COMMENT '登录次数',
  `reg_time` datetime NOT NULL DEFAULT '2017-03-26 00:00:00' COMMENT '注册时间',
  `utime` datetime DEFAULT '2017-03-26 00:00:00' COMMENT '更新时间',
  `user_status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '用户状态 0：禁用； 1：正常 ；2：未验证',
  `province` int(11) DEFAULT NULL COMMENT '省',
  `city` int(11) DEFAULT NULL COMMENT '市',
  `area` int(11) DEFAULT NULL COMMENT '区',
  `address` varchar(255) DEFAULT NULL COMMENT '详细地址',
  `post_count` int(11) DEFAULT '0' COMMENT '发布的文章总数',
  `post_like` int(11) DEFAULT '0' COMMENT '喜欢的文章总数',
  `post_collection` int(11) DEFAULT '0' COMMENT '收藏的文章总数',
  `followers` int(11) DEFAULT '0' COMMENT '关注我的人总数',
  `following` int(11) DEFAULT '0' COMMENT '我关注的人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_email` (`user_email`),
  UNIQUE KEY `user_mobile` (`user_mobile`),
  KEY `user_login` (`user_login`),
  KEY `user_nickname` (`user_nickname`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='用户表';


DROP TABLE IF EXISTS `mars_oauth_user`;

CREATE TABLE `mars_oauth_user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `from` varchar(30) NOT NULL COMMENT '用户来源key',
  `nickname` varchar(30) NOT NULL COMMENT '第三方昵称',
  `head_img` varchar(200) NOT NULL COMMENT '第三方头像',
  `uid` int(20) NOT NULL COMMENT '关联用户id',
  `create_time` datetime NOT NULL COMMENT '绑定时间',
  `last_login_time` datetime NOT NULL COMMENT '最后登录时间',
  `last_login_ip` varchar(16) NOT NULL COMMENT '最后登录ip',
  `login_times` int(11) NOT NULL COMMENT '登录次数',
  `status` tinyint(1) NOT NULL,
  `access_token` varchar(60) NOT NULL,
  `expires_date` int(12) NOT NULL COMMENT 'access_token过期时间',
  `openid` varchar(40) NOT NULL COMMENT '第三方用户id',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='第三方登录表';


DROP TABLE IF EXISTS `mars_classify`;

CREATE TABLE `mars_classify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '分类名称',
  `description` varchar(255) DEFAULT NULL COMMENT '分类描述',
  `pid` int(11) DEFAULT NULL COMMENT '父级分类id',
  `count` int(11) DEFAULT NULL COMMENT '分类文章数',
  `sort` int(5) DEFAULT '0' COMMENT '排序',
  `status` tinyint(1) DEFAULT '1' COMMENT '1可用分类2不可用',
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='文章分类表';



DROP TABLE IF EXISTS `mars_posts`;

CREATE TABLE `mars_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_author` int(11) NOT NULL COMMENT '作者id',
  `post_description` varchar(255) DEFAULT NULL COMMENT '文章描述',
  `post_date` int(11) NOT NULL COMMENT '创建时间（不一定发布）',
  `post_title` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `post_excerpt` varchar(255) DEFAULT NULL COMMENT '文章摘要',
  `post_content` longtext COMMENT '文章内容',
  `post_img` varchar(100) DEFAULT NULL COMMENT '文章列表图',
  `post_status` tinyint(1) DEFAULT '0' COMMENT '0草稿，1发布',
  `comment_status` tinyint(1) DEFAULT '1' COMMENT '1允许评论，0不允许',
  `mtime` datetime DEFAULT NULL COMMENT '修改时间',
  `atime` int(11) NOT NULL COMMENT '添加时间',
  `post_type` int(11) NOT NULL COMMENT '文章分类',
  `comment_count` int(11) DEFAULT '0' COMMENT '评论总数',
  `collection_count` int(11) DEFAULT '0' COMMENT '收藏总数',
  `post_hits` int(11) DEFAULT '0' COMMENT '查看数',
  `post_like` int(11) DEFAULT '0' COMMENT '点赞数',
  PRIMARY KEY (`id`),
  KEY `post_author` (`post_author`),
  KEY `post_title` (`post_title`),
  KEY `atime` (`atime`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='文章表';


DROP TABLE IF EXISTS `mars_follow`;

CREATE TABLE `mars_follow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '收藏者id',
  `follow_id` int(11) NOT NULL COMMENT '被收藏者id',
  `atime` int(11) NOT NULL COMMENT '收藏时间',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `follow_id` (`follow_id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='我关注的用户和关注我的用户';


DROP TABLE IF EXISTS `mars_user_like`;

CREATE TABLE `mars_user_like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL COMMENT '收藏者id',
  `post_id` int(11) NOT NULL COMMENT '原文章id',
  `url` varchar(255) DEFAULT NULL COMMENT '文章原地址',
  `title` varchar(255) DEFAULT NULL COMMENT '文章标题',
  `author` int(11) DEFAULT NULL COMMENT '文章作者id',
  `avatar_url` varchar(255) DEFAULT NULL COMMENT '文章作者的头像地址',
  `author_name` varchar(50) DEFAULT NULL COMMENT '文章的作者名称',
  `addtime` int(11) DEFAULT NULL COMMENT '收藏时间',
  `type` tinyint(1) NOT NULL COMMENT '1收藏2喜欢',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `post_id` (`post_id`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk COMMENT='我收藏和喜欢的文章';


```




# nestjs-graphql-react-apollo-example
基于react-apollo + nestjs+typegraphql 例子


#### 数据库配置
`service/.env`
- sql
```
CREATE TABLE `code_todo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `done` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NAME` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```
#### 启动
- 前端
`cd client && npm install && npm start`
- 后端
`cd service && npm install && npm run start`
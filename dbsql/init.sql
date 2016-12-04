-- create sequence
create sequence todolist_seq;

-- create table todolist
create table todolist
(
	id bigint default todolist_seq.nextval primary key,
	text varchar(255),
	status char(1),
	createtime datetime,
	completedtime datetime
);

-- create table users
create table users
(
	id varchar(20) primary key,
	password varchar(50),
	role varchar(20),
	email varchar(50),
	createtime datetime
);
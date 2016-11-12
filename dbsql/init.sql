-- create sequence
create sequence todolist_seq;

-- create table
create table todolist
(
	id bigint default todolist_seq.nextval primary key,
	text varchar(255),
	status char(1),
	createtime datetime,
	completedtime datetime
);
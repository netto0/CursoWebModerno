select * from estados where id = 31

insert into cidades (nome, area, estado_id)
values ('Campinas', 795, 30)

insert into cidades (nome, area, estado_id)
values ('Niterói', 133.9, 24)

insert into cidades (nome, area, estado_id)
values ('Caruaru', 920.6, (select id from estados where sigla = 'pe'))

insert into cidades (nome, area, estado_id)
values('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'ce'))

select * from cidades
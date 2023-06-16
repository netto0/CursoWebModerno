update estados
set nome = 'Maranhão'
WHERE sigla = 'MA'

select nome from estados where sigla = 'ma'

update estados
set nome = 'Paraná', populacao = 11.32
where sigla = 'pr'

select est.nome, sigla, populacao from estados est where sigla = 'pr'
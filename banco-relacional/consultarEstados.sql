select * from estados

select nome, sigla from estados WHERE regiao = 'Sul'

select nome as 'Nome do Estado', regiao, populacao from estados WHERE populacao >= 10 order by populacao desc
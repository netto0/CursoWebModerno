# C:\Users\ALIANCA2\Documents\VScode\Python\execBot.py
import bot
from datetime import date

DIAS = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-Feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
]

data = date.today()
indice_da_semana = data.weekday()
dia_da_semana = DIAS[indice_da_semana]

if dia_da_semana == 'Sexta-feira':
    gerarTodos = True
else:
    gerarTodos = False

if not gerarTodos:
    bot.gerarRelatorios(todos = False)
else:
    bot.gerarRelatorios(todos = True)
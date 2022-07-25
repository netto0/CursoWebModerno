from geraRelatorios import *
import time
from datetime import date

time.sleep(5)
print('Clique na tela de rotinas externas!')

def geraSexta():
    geraRet(502,4)
    geraRet(503,4)
    geraRet(504,4)
    geraRet(507,4)
    geraRet(509,4)
    geraPos(502)
    geraPos(503)
    geraPos(504)
    geraPos(507)
    geraPos(509)
    geraVenda(502)
    geraVenda(503)
    geraVenda(504)
    geraVenda(507)
    geraVenda(509)
    geraFatGeral()

def geraSemana():
    geraRet(503,4)
    geraRet(504,4)
    geraRet(507,4)
    geraPos(503)
    geraPos(504)
    geraPos(507)
    geraVenda(503)
    geraVenda(504)
    geraVenda(507)
    geraFatGeral()

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
    geraSexta()
else:
    geraSemana()

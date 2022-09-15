from email.charset import QP
import pyautogui as bot
import time
from pynput.keyboard import Controller, Key
from funcoesComuns import *
from datetime import date
keyboard = Controller()


def geraPos(vendedor):
    vendedor = str(vendedor)
    arquivo = 'POS'
    bot.PAUSE = 1
    caminhoCompleto = montarCaminho(vendedor, arquivo)[0]
    nomeArquivo = montarCaminho(vendedor, arquivo)[1]
    preencherRotinasExternas('vdgr0017')
    # Corpo da função
    time.sleep(1.5)
    apertar(Key.enter,58,0.05)
    keyboard.type(vendedor)
    keyboard.type(vendedor)
    apertar(Key.enter,57,0.05)
    time.sleep(5)
    # Fim do Corpo
    salvar(caminhoCompleto, nomeArquivo)


def geraRet(vendedor):
    hoje = date.today()
    mesAtual = hoje.month
    tresMesesAtras = mesAtual-3
    vendedor = str(vendedor)
    mes = str(tresMesesAtras)
    arquivo = 'RET'
    bot.PAUSE = 1
    caminhoCompleto = montarCaminho(vendedor, arquivo)[0]
    nomeArquivo = montarCaminho(vendedor, arquivo)[1]
    preencherRotinasExternas('vdgr0090')
    # Corpo da função
    bot.sleep(1.5)
    bot.write(mes)
    apertar(Key.enter,10,0.1)
    keyboard.type(vendedor)
    apertar(Key.enter,3,0.1)
    apertar(Key.right,4)
    apertar(Key.enter,7,0.1)
    bot.press('space')
    apertar(Key.enter)
    keyboard.type('1')
    apertar(Key.enter)
    keyboard.type('25')
    apertar(Key.enter)
    keyboard.type('61')
    apertar(Key.enter,16,0.2)
    bot.press('space')
    apertar(Key.enter,3,0.1)
    bot.press('space')
    apertar(Key.enter,3,0.1)
    time.sleep(6)
    # Fim do Corpo
    salvar(caminhoCompleto, nomeArquivo)


def geraVenda(vendedor):
    vendedor = str(vendedor)
    arquivo = 'VENDA'
    bot.PAUSE = 1
    caminhoCompleto = montarCaminho(vendedor, arquivo)[0]
    nomeArquivo = montarCaminho(vendedor, arquivo)[1]
    preencherRotinasExternas('vdgr0091')
    # Corpo da função
    time.sleep(2)
    apertar(Key.enter,12,0.2)
    keyboard.type(vendedor)
    apertar(Key.enter,7,0.05)
    bot.write('20211',0.03)
    apertar(Key.enter,49,0.15)
    time.sleep(1)
    apertar(Key.left)
    time.sleep(1)
    apertar(Key.enter,2,0.05)
    time.sleep(30)
    # Fim do Corpo
    salvar(caminhoCompleto, nomeArquivo)


def geraFatGeral():
    vendedor = ''
    arquivo = 'FATURAMENTO GERAL'
    bot.PAUSE = 1
    caminhoCompleto = montarCaminho(vendedor, arquivo)[0]
    nomeArquivo = montarCaminho(vendedor, arquivo)[1]
    preencherRotinasExternas('vdgr0090')
    # Corpo da função
    time.sleep(3)
    apertar(Key.enter,9,0.1)
    keyboard.type('500')
    apertar(Key.enter,4,0.1)
    apertar(Key.right,3)
    apertar(Key.enter,26,0.1)
    bot.press('space')
    apertar(Key.enter,3)
    bot.press('space')
    apertar(Key.enter,3)
    time.sleep(2)
    apertar(Key.tab)
    apertar(Key.enter)
    time.sleep(2)
    # Fim do Corpo
    salvar(caminhoCompleto, nomeArquivo)
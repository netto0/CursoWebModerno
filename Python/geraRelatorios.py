import pyautogui as bot
import time
from pynput.keyboard import Controller, Key
from funcoesComuns import *
keyboard = Controller()


def geraPos(vendedor):
    vendedor = str(vendedor)
    arquivo = 'POS'
    bot.PAUSE = 1
    caminhoCompleto = montarCaminho(vendedor, arquivo)[0]
    nomeArquivo = montarCaminho(vendedor, arquivo)[1]
    preencherRotinasExternas('vdgr0017')
    # Corpo da função
    bot.sleep(1.5)
    bot.press('enter',58,0.05)
    bot.write(vendedor) # Vendedor
    bot.write(vendedor) # Vendedor
    bot.press('enter',57,0.05)
    bot.sleep(3)
    # Fim do Corpo
    salvar(caminhoCompleto, nomeArquivo)


def geraRet(vendedor, mes):
    vendedor = str(vendedor)
    mes = str(mes)
    arquivo = 'RET'
    bot.PAUSE = 1
    caminhoCompleto = montarCaminho(vendedor, arquivo)[0]
    nomeArquivo = montarCaminho(vendedor, arquivo)[1]
    preencherRotinasExternas('vdgr0090')
    # Corpo da função
    bot.sleep(3)
    bot.write(mes)
    bot.press('enter',10,0.1)
    bot.write(vendedor)
    bot.press('enter',3,0.1)
    apertar(Key.right,4)
    bot.press('enter',7,0.1)
    bot.press('space')
    bot.press('enter')
    bot.write('1')
    bot.press('enter')
    bot.write('25')
    bot.press('enter')
    bot.write('61')
    bot.press('enter',16,0.2)
    bot.press('space')
    bot.press('enter',3,0.1)
    bot.press('space')
    bot.press('enter',3,0.1)
    bot.sleep(6)
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
    bot.press('enter',12,0.05)
    bot.write(vendedor)
    bot.press('enter',7,0.05)
    bot.write('20211',0.02)
    bot.press('enter',49,0.15)
    bot.sleep(1)
    apertar(Key.left)
    bot.sleep(1)
    bot.press('enter',2,0.05)
    bot.sleep(20)
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
    bot.sleep(3)
    bot.press('enter',9,0.1)
    bot.write('500')
    bot.press('enter',4,0.1)
    apertar(Key.right,3)
    bot.press('enter',26,0.1)
    bot.press('space')
    bot.press('enter',3)
    bot.press('space')
    bot.press('enter',3)
    bot.sleep(2)
    bot.press('tab')
    bot.press('enter')
    bot.sleep(2)
    # Fim do Corpo
    salvar(caminhoCompleto, nomeArquivo)
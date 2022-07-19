

import pyautogui as bot
import time

def gerarVdgr0017(vendedor):
    bot.PAUSE = 1
    bot.write('1')
    bot.press('enter')
    bot.write('vdgr0017')
    bot.press('enter',2,0.5)
    bot.sleep(3)
    bot.press('enter',58,0.05)
    bot.write(vendedor) # Vendedor
    bot.write(vendedor) # Vendedor
    bot.press('enter',57,0.05)
    bot.sleep(3)
    bot.press('tab')
    bot.press('enter')
    nomeRelatorio = 'POS ' + vendedor + '.TXT'
    bot.sleep(2)
    bot.write(nomeRelatorio)
    print(nomeRelatorio, 'gerado!')
    bot.press('tab')
    bot.press('tab')
    bot.press('enter')
    bot.press('enter')
    bot.press('esc',3,0.2)

def geraPos(todos=False):
    if todos:
        gerarVdgr0017('501')
        bot.press('enter')
        gerarVdgr0017('509')
        bot.press('enter')
    gerarVdgr0017('503')
    bot.press('enter')
    gerarVdgr0017('504')
    bot.press('enter')
    gerarVdgr0017('507')
    bot.press('enter')

def gerarVdgr0090vend(vendedor,mes):
    bot.PAUSE = 1
    bot.write('1')
    bot.press('enter')
    bot.write('vdgr0090')
    bot.press('enter',2,.05)
    bot.sleep(3)
    bot.write(mes)
    bot.press('enter',10,0.1)
    bot.write(vendedor)
    bot.press('enter',3,0.1)
    bot.press('right',4,0.1)
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
    bot.press('tab')
    bot.press('enter')
    nomeRelatorio = 'ret ' + vendedor + '.TXT'
    bot.sleep(2)
    bot.write(nomeRelatorio)
    print(nomeRelatorio, 'gerado!')
    bot.press('tab')
    bot.press('tab')
    bot.press('enter')
    bot.press('enter')
    bot.press('esc',3,0.2)

def geraRet(todos=False):
    if todos:
        gerarVdgr0090vend('501', '4')
        bot.press('enter')
        gerarVdgr0090vend('509', '4')
        bot.press('enter')
    gerarVdgr0090vend('503','4')
    bot.press('enter')
    gerarVdgr0090vend('504','4')
    bot.press('enter')
    gerarVdgr0090vend('507','4')
    bot.press('enter')

def gerarVendaIndiv(vendedor):
    bot.PAUSE = 1
    bot.write('1')
    bot.press('enter')
    bot.write('vdgr0091')
    bot.press('enter',2)
    bot.sleep(3)
    bot.press('enter',12,0.05)
    bot.write(vendedor)
    bot.press('enter',7,0.05)
    bot.write('20211',0.02)
    bot.press('enter',49,0.15)
    bot.sleep(1)
    bot.press('left')
    bot.sleep(1)
    bot.press('enter',2,0.05)
    bot.sleep(20)
    bot.press('tab')
    bot.press('enter')
    nomeRelatorio = 'venda ' + vendedor + '.TXT'
    bot.sleep(2)
    bot.write(nomeRelatorio)
    print(nomeRelatorio, 'gerado!')
    bot.press('tab')
    bot.press('tab')
    bot.press('enter')
    bot.press('enter')
    bot.press('esc',3,0.5)

def geraVenda(todos=False):
    if todos:
        gerarVendaIndiv('501')
        bot.press('enter')
        gerarVendaIndiv('509')
        bot.press('enter')
    gerarVendaIndiv('503')
    bot.press('enter')
    gerarVendaIndiv('504')
    bot.press('enter')
    gerarVendaIndiv('507')
    bot.press('enter')

def gerarFatGeral():
    bot.PAUSE = 1
    bot.write('1')
    bot.press('enter')
    bot.write('vdgr0090')
    bot.press('enter',2)
    bot.sleep(3)
    bot.press('enter',9,0.1)
    bot.write('500')
    bot.press('enter',4,0.1)
    bot.press('right',3,0.1)
    bot.press('enter',26,0.1)
    bot.press('space')
    bot.press('enter',3)
    bot.press('space')
    bot.press('enter',3)
    bot.sleep(2)
    bot.press('tab')
    bot.press('enter')
    bot.sleep(2)
    bot.write('faturamento geral.txt')
    print('faturamento geral.txt gerado!')
    bot.press('tab')
    bot.press('tab')
    bot.press('enter')
    bot.press('enter')
    bot.press('esc',3,0.2)

def gerarRelatorios(todos=False):
    print('Desative o NUM LOCK!')
    time.sleep(1)
    print('Clique na janela de rotinas externas!')
    time.sleep(1)
    for c in range(10,0,-1):
        print(f'{c} Segundos para iniciar!')
        time.sleep(1)

    print('Iniciando...')
    if todos:
        geraPos(todos=True)
        time.sleep(2)
        geraVenda(todos=True)
        time.sleep(2)
        geraRet(todos=True)
        time.sleep(2)
        gerarFatGeral()
    else:
        geraPos()
        time.sleep(2)
        geraVenda()
        time.sleep(2)
        geraRet()
        time.sleep(2)
        gerarFatGeral()
    print('Finalizando...')
# gerarRelatorios()
# time.sleep(5)
# gerarFatGeral()
# geraRet(todos=True)





import pyautogui as bot
import pygetwindow
import time
from pynput.keyboard import Controller, Key
keyboard = Controller()

def preencherRotinasExternas(relatorio):
    time.sleep(1)
    keyboard.type('1')
    time.sleep(0.1)
    apertar(Key.enter)
    keyboard.type(relatorio)
    apertar(Key.enter, 2, 0.5)
    time.sleep(2)

def montarCaminho(vendedor, arquivo):
    caminho = r'f:\DOCUMENTOS\Netto\Att Planilha\Relatorios'
    if arquivo == 'FATURAMENTO GERAL':
        nomeArquivo = fr'\{arquivo}' + '.TXT'
    else:
        nomeArquivo = fr'\{arquivo} ' + vendedor + '.TXT'
    completo = caminho + nomeArquivo
    return [completo, nomeArquivo]

def salvar(caminhoCompleto, nomeArquivo):
    apertar(Key.tab)
    apertar(Key.enter)
    time.sleep(2)
    keyboard.type(caminhoCompleto)
    apertar(Key.tab,2,0.1)
    apertar(Key.enter,2,0.1)
    print(nomeArquivo, 'gerado!')
    apertar(Key.esc,3,0.1)
    apertar(Key.enter)
    time.sleep(2)
    apertar(Key.enter)

def apertar(tecla, vezes = 1, intervalo = 0.01):
    for c in range(vezes):
        keyboard.press(tecla)
        time.sleep(intervalo)

def goToExcel():
    bot.PAUSE = 1
    title = 'FUNDAMENTOS JULHO 2022 AUTO v2 - Excel'
    window = pygetwindow.getWindowsWithTitle(title)[0]
    window.activate()
    window.maximize()
    time.sleep(1)
    bot.press('altleft')
    bot.press('k')
    bot.press('m')
    bot.press('x')
    keyboard.type('TUDO')
    time.sleep(1)
    bot.press('enter')
    apertar(Key.enter,25,1)
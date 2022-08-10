import pyautogui as bot
import time
from pynput.keyboard import Controller
keyboard = Controller()

def preencherRotinasExternas(relatorio):
    bot.write('1')
    bot.press('enter')
    keyboard.type(relatorio)
    bot.press('enter', 2, 0.1)

def montarCaminho(vendedor, arquivo):
    caminho = r'f:\DOCUMENTOS\Netto\Att Planilha\Relatorios'
    if arquivo == 'FATURAMENTO GERAL':
        nomeArquivo = fr'\{arquivo}' + '.TXT'
    else:
        nomeArquivo = fr'\{arquivo} ' + vendedor + '.TXT'
    completo = caminho + nomeArquivo
    return [completo, nomeArquivo]

def salvar(caminhoCompleto, nomeArquivo):
    bot.press('tab')
    bot.press('enter')
    bot.sleep(2)
    keyboard.type(caminhoCompleto)
    bot.press('tab', 2, 0.1)
    bot.press('enter', 2, 0.1)
    print(nomeArquivo, 'gerado!')
    bot.press('esc',3,0.1)
    bot.press('enter')

def apertar(tecla, vezes = 1, intervalo = 0.01):
    for c in range(vezes):
        keyboard.press(tecla)
        time.sleep(intervalo)
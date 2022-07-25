import pyautogui as bot
import time

quantidade = 105

posicaoClick = (-1502, 191)

for c in range(quantidade):
    print(f'Executando a {c} limpeza, faltam {quantidade - c}')
    time.sleep(3)
    bot.PAUSE = 1
    bot.click(posicaoClick)
    bot.press('tab', 7, 0.1)
    bot.press('enter')
    bot.write('V')   
    bot.press('enter')

print('Limpeza Finalizada!')
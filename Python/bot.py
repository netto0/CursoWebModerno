import pyautogui as bot


# bot.PAUSE = 2
# bot.hotkey('win','2') # Abre o Menu de Area de Trabalho Remota
# bot.write('132.255.233.27:3356')
# bot.press('enter')
# bot.hotkey('win','5')
# bot.write('1')
# bot.press('enter')
# bot.write('FIN')
# bot.write('145145')
# bot.press('enter',5)
# bot.sleep(3)
# bot.write('esp')
# bot.press('right')

# DENTRO DA ABA ESPECIAIS

bot.sleep(3)

# Gerar VDGR0017

def gerarVdgr0017(vendedor):
    bot.PAUSE = 1
    bot.write('1')
    bot.press('enter')
    bot.write('vdgr0017')
    bot.press('enter',2)
    bot.sleep(1.5)
    bot.press('enter',58)
    bot.write(vendedor) # Vendedor
    bot.write(vendedor) # Vendedor
    bot.press('enter',57)
    bot.sleep(3)
    bot.press('tab')
    bot.press('enter')
    nomeRelatorio = 'POS ' + vendedor + '.TXT'
    bot.sleep(2)
    bot.write(nomeRelatorio)
    bot.press('tab')
    bot.press('tab')
    bot.press('enter')
    bot.press('enter')
    bot.press('esc',3,0.2)


# gerarVdgr0017('503')
# bot.press('enter')
# gerarVdgr0017('504')
# bot.press('enter')
# gerarVdgr0017('507')
# bot.press('enter')

# Gerar VDGR0090 ret
def gerarVdgr0090vend(vendedor,mes):
    bot.PAUSE = 1
    bot.write('1')
    bot.press('enter')
    bot.write('vdgr0090')
    bot.press('enter',2)
    bot.sleep(0.5)
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
    bot.press('tab')
    bot.press('tab')
    bot.press('enter')
    bot.press('enter')
    bot.press('esc',3,0.2)

gerarVdgr0090vend('503','4')
bot.press('enter')
gerarVdgr0090vend('504','4')
bot.press('enter')
gerarVdgr0090vend('507','4')

# Gerar venda indiv

vendedor = '503'


def gerarVendaIndiv(vendedor):
    bot.PAUSE = 1
    bot.write('1')
    bot.press('enter')
    bot.write('vdgr0091')
    bot.press('enter',2)
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
    bot.press('tab')
    bot.press('tab')
    bot.press('enter')
    bot.press('enter')
    bot.press('esc',3,0.2)

# gerarVendaIndiv('503')
# bot.press('enter')
# gerarVendaIndiv('504')
# bot.press('enter')
# gerarVendaIndiv('507')
# bot.press('enter')


import bot

# bot.gerarRelatorios(todos = False)

# É para gerar os relatórios de todos os vendedores? (S/N)

gerarTodos = 'N'

if not gerarTodos:
    bot.gerarRelatorios(todos = False)
else:
    bot.gerarRelatorios(todos = True)
# Design QA

## Resultado

final result: passed

## Verificações

- Comparação visual feita no navegador em desktop e em 390 × 844 px no celular.
- Cabeçalho removido a pedido; a página começa diretamente pela proposta principal.
- Atalho “Além do trabalho” e monograma “A” removidos, com o espaço vertical do hero ajustado.
- Numeração dos projetos removida; logos e textos reposicionados à esquerda.
- Redes sociais centralizadas no rodapé e borda superior removida.
- Hero e espaçamentos ajustados para manter a seção “Sobre” visível na primeira tela, com respiro antes dos projetos; ícone do CTA e etiqueta superior removidos.
- Ajustada a sobreposição inicial do hero causada pela classe global `.hero` do DaisyUI; o conteúdo agora flui em coluna e fica alinhado à esquerda.
- Descrições dos projetos quebram em até duas linhas no celular, sem corte; não há rolagem horizontal.
- Foto pessoal permanece discreta (78 px no desktop, 64 px no celular).
- Build de produção concluído com `docker compose exec -T app bun run build`.
- Links do Tally usam `utm_source=andre`; links dos quatro projetos também usam esse UTM; links sociais não usam UTM.
- Foto e logos carregaram corretamente. Após recarregar a página final, não houve erro atual de renderização; houve apenas mensagens antigas de HMR durante a recriação do arquivo, antes do reload bem-sucedido.

## Referência visual

Direção selecionada: `/Users/andre/.codex/generated_images/01a0b2b5-abc6-7ed2-b8c2-16a30b05d640/exec-05ab8c88-b8de-4c95-a5db-dbe5e7d719d7.png`

Implementação verificada em `http://localhost:3001/`. O servidor Docker permanece ativo para revisão e iteração.

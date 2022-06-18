---
title: njoqi · Tea
name: Tea
meta:
  - name: description
    content: Informations about tea.
---

<p>
  <router-link to="/codex">
    ← Codex index
  </router-link>
</p>

<script setup>
  import ArticleHeader from '../../components/article-header.vue';
  
  const text = "Informations about tea, including a log of some teas I have tried. I seem to have a soft spot for earthy and grassy flavours.";
  const customMeta = [{"name": "description", "content": text}]
</script>

<ArticleHeader name="Tea" :meta="customMeta" />



## Resources

- [Regional banchas as ethnographic documents](https://japaneseteasommelier.wordpress.com/2018/03/19/regional-banchas-as-ethnographic-documents/)
- [Basics, knowledge, and experiments about sencha brewing](https://japaneseteasommelier.wordpress.com/2015/03/03/basics-knowledge-and-experiments-about-sencha-brewing/)
- [How to brew tea properly. Brewing methods in different countries.](https://tea-side.com/blog/how-to-brew-tea/)
- [A list of japanese teas](https://www.japan-talk.com/jt/new/japanese-tea)

## Tea log

### Sencha

- Origin: Japan
- Type: green tea
- Leaves: fine, powdery
- Profile: vegetal

### Kasakura

- Origin: Japan
- Type: smoked tea (cherry tree wood)
- Leaves: shrivelled, crispy, tiny twigs
- Profile: smoky, raspy, rich

### Hōji Kukicha

- Origin: Japan
- Type: roasted tea stems
- Leaves: small twigs
- Profile: comforting, smoky, umami?

### Kukicha

- Origin: Japan
- Type: green tea stems
- Leaves: fine, dark green leaves and light green stems
- Profile: vegetal, sweet

### Yunnan Black

- Origin: China
- Type: black tea
- Leaves: shrivelled, sometimes golden, few twigs
- Profile: smoky, sweet
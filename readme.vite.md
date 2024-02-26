# Публикация плагина Vite

<https://habr.com/ru/companies/otus/articles/703876/>
<https://rollupjs.org/plugin-development/#properties>
<https://rollupjs.org/plugin-development/#plugins-overview/>

Если после создания плагина вы решите опубликовать его в виде отдельного пакета для установки через NPM, вам следует придерживаться следующих правил:

Ваш плагин должен иметь понятное название с префиксом vite-plugin-.

Включать ключевое слово vite-plugin в package.json

{
"name": "building-a-plugin-with-vite",
"private": true,
"version": "0.0.0",
"type": "module",
"keywords": ["vite-plugin"],
}

При документировании своего плагина включите раздел с подробным описанием того, почему он предназначен только для Vite (а не для Rollup). Чаще всего плагин предназначен только для Vite, потому что он использует некоторые специфические для Vite хуки плагина.

Наконец, если ваш плагин работает только для определенного фреймворка, то его название должно быть частью префикса названия плагина, например, vite-plugin-svelte-, vite-plugin-react-, vite-plugin-react-, vite-plugin-lit- и т.д.

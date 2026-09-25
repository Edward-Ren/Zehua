# 博客编辑说明

所有博客文件都在这个文件夹，网站继续共用根目录的 `style.css`。

- `index.html`：博客目录，修改这里的文章标题、日期和链接。
- `a-first-note.html`：第一篇文章。
- `notes-on-learning.html`：第二篇文章。
- `small-reflections.html`：第三篇文章。

## 修改标题和日期

在 `index.html` 中找到对应的这一行：

```html
<p class="blog-entry"><a href="./a-first-note.html">A first note</a> <span class="post-date">MM-DD</span></p>
```

把 `A first note` 改成自己的标题，把 `MM-DD` 改成月日，例如 `09-23`。现在的日期只是占位，尚未填写发布日期。

再打开对应文章文件，同步修改 `<title>`、`<h2 class="post-title">` 中的标题和 `<p class="post-date">` 中的日期。把 `To be added.` 换成正文，每段使用一个 `<p>正文内容</p>`。

## 新增文章

1. 在此文件夹复制一篇现有文章，使用新的英文文件名，例如 `my-new-post.html`。
2. 修改新文件里的标题、日期和正文。
3. 在 `index.html` 的 `blog-posts` 区域复制一行文章入口，填写标题、日期，并把链接改成 `./my-new-post.html`。

文章末尾的 Home、Blog 导航和兔子图片已经配好，保留即可。

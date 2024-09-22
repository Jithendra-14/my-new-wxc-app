var newsArticles, mainContainer;

$(document).ready(function () {
    mainContainer = $(".main-container");
    newsArticles = getArticlesWithQuestions(questions);
    generateNewsItemsList(newsArticles);
});

function generateNewsItemsList(articles) {
    articles.forEach(function (article, index) {
        var newItem = generateNewsItem(article, index);
        mainContainer.append(newItem);
    });
}

function generateNewsItem(articleInfo, articleIndex) {
    var questionsCarousel = "";
    var articleDate = formatDate(articleInfo.ArticleDatePublished);

    if (articleInfo.Questions.length > 2) {
        questionsCarousel = `<h5 class="paa-heading secondary-text">People also want to know</h5>
        <div class="carousel-container">${getQuestionsCarousel(
            articleInfo.Questions,
            articleIndex
        )}</div>`;
    }

    return `
      <div class="article-item">
        ${
            articleInfo.ArticleImageThumbnailUrl ? (
                `<div
                    class="article-image-thumbnail"
                    style="background-image:url('${
            articleInfo.ArticleImageThumbnailUrl
        }')"
                ></div>`
            ) : (
                ""
            )
        }
        <div class="article-source-info">
            <span class="article-source-channel" style="${
                articleInfo.ArticleProviderLogoUrl
                    ? "background-image:url(" + articleInfo.ArticleProviderLogoUrl + ")"
                    : ""
            } "></span>
            <span class="secondary-text">${articleDate}</span>
        </div>
        <a href="article.html?articleIndex=${articleIndex}" class="article-headline">
            <h3>${articleInfo.ArticleTitle}</h3>
        </a>
        ${questionsCarousel}
      </div>
    `;
}

function getQuestionsCarousel(questions, articleIndex) {
    var questionSlides = "";
    if (questions.length) {
        questions.forEach(function (question, questionIndex) {
            var answerDate = formatDate(question.AnswerDatePublished);
            questionSlides += `
              <li class="carousel-item">
                  <div class="qns-carousel-item">
                      <a href="article.html?articleIndex=${articleIndex}&isRelatedArticle=true&questionIndex=${questionIndex}" class="qns-carousel-link">
                        <h4 class="question-heading">${question.Question}</h4>
                        <div class="answer-body">${question.AnswerBody}</div>
                        <div class="answer-source">
                            <span class="answer-source-img" style="background-image:url('${question.AnswerProviderLogoUrl}')"></span>
                            <span class="secondary-text">${answerDate}</span>
                        </div>
                        <span class="answer-url">${question.AnswerTitle}</span>
                      </a>
                  </div>
              </li>
          `;
        });
    } else {
        questionSlides += '<li><div class="center-text">No related questions found</div></li>';
    }

    return `
    <ul class="carousel-items-container">
        ${questionSlides}
    </ul>
    `;
}

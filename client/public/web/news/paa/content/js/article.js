var newsArticles,
    articleIndex,
    articleDetailsBody,
    currentArticleQuestions,
    visibleArticleQuestions;

$(document).ready(function () {
    articleDetailsBody = $(".article-detais-body");
    newsArticles = getArticlesWithQuestions(questions);

    if (newsArticles) {
        var urlParams = new URLSearchParams(window.location.search);
        articleIndex = urlParams.get("articleIndex");
        var isRelatedArticle = urlParams.get("isRelatedArticle");
        var questionIndex = urlParams.get("questionIndex");
        var articleInfo = newsArticles[articleIndex];

        if (articleInfo) {
            var selectedQuestion = articleInfo.Questions[questionIndex];
            if (isRelatedArticle == "true" && selectedQuestion) {
                var relatedQuestions = [];
                articleInfo.Questions.map(function (question, index) {
                    if (selectedQuestion.AnswerUrl != question.AnswerUrl) {
                        var tempQuestion = question;
                        tempQuestion.actualIndex = index;
                        relatedQuestions.push(tempQuestion);
                    }
                });
                generateArticleDetails(
                    selectedQuestion.AnswerTitle,
                    selectedQuestion.AnswerContent
                        ? selectedQuestion.AnswerContent
                        : selectedQuestion.AnswerBody,
                    selectedQuestion.AnswerUrl,
                    selectedQuestion.AnswerImageThumbnailUrl
                        ? selectedQuestion.AnswerImageThumbnailUrl
                        : articleInfo.ArticleImageThumbnailUrl,
                    selectedQuestion.AnswerDatePublished,
                    selectedQuestion.AnswerProviderLogoUrl,
                    relatedQuestions
                );
            } else {
                generateArticleDetails(
                    articleInfo.ArticleTitle,
                    articleInfo.ArticleContent
                        ? articleInfo.ArticleContent
                        : articleInfo.ArticleSnippet,
                    articleInfo.ArticleUrl,
                    articleInfo.ArticleImageThumbnailUrl,
                    articleInfo.ArticleDatePublished,
                    articleInfo.ArticleProviderLogoUrl,
                    articleInfo.Questions
                );
            }
        }

        addArticleAccordionEvents();
    }
});

function generateArticleDetails(
    title,
    description,
    articleUrl,
    imageUrl,
    datePublished,
    sourceUrl,
    questions
) {
    var questionsAccordion = "";
    var articleDateObj = new Date(datePublished.replace(/-/g, "/"));
    var articleTime = articleDateObj.toLocaleTimeString();
    var articleDate = articleDateObj.toDateString();

    if (sourceUrl) {
        $(".article-header-image").css("background-image", "url(" + sourceUrl + ")");
    }

    if (questions.length > 0) {
        questionsAccordion = `
            <h5 class="paa-heading secondary-text">People also want to know</h5>
            <div class="accordion-container">
                ${getQuestionsAccordion(questions)}
            </div>`;
    }

    var articleContent = `
    ${
        imageUrl
            ? `<div class="article-image-thumbnail" style="background-image:url('${imageUrl}')"></div>`
            : ""
    }
    <div class="article-content">
        <a href="${articleUrl}" class="article-headline"><h3>${title}</h3></a>
        <div class="article-source-details">
            <span class="article-time secondary-text">${articleTime}</span>
            <span class="article-date secondary-text">${articleDate}</span>
        </div>
        <div class="article-body">
          ${description}
        </div>
        ${questionsAccordion}
    </div>
  `;
    articleDetailsBody.html(articleContent);
}

function addArticleAccordionEvents() {
    $(".accordion-heading-container")
        .off("click")
        .on("click", function (event) {
            $(this).toggleClass("active");
            var isExpanded = $(this).find(".accordion-toggle-icon.arrow-down");

            var accordionBody = $(this).parent().find(".accordion-body-container");

            if (isExpanded.length) {
                accordionBody.css("max-height", accordionBody.prop("scrollHeight") + "px");
                if (visibleArticleQuestions < currentArticleQuestions.length) {
                    var nextAccordionItems = currentArticleQuestions.slice(
                        visibleArticleQuestions,
                        visibleArticleQuestions + 2
                    );

                    nextAccordionItems.forEach(function (item, index) {
                        $(".accordion-items-container").append(
                            getAccordionItem(
                                item,
                                item.actualIndex != undefined
                                    ? item.actualIndex
                                    : visibleArticleQuestions + index,
                                true
                            )
                        );
                        visibleArticleQuestions += 1;
                    });
                    addArticleAccordionEvents();
                }
            } else {
                accordionBody.css("max-height", "");
            }

            $(this).find(".accordion-toggle-icon").toggleClass("arrow-down");
        });
}

function getQuestionsAccordion(questions) {
    var accordionItems = "";
    visibleArticleQuestions = 0;

    if (questions.length) {
        currentArticleQuestions = questions;
        var maxItems = questions.length < 6 ? questions.length : 5;
        for (var idx = 0; idx < maxItems; idx++) {
            accordionItems += getAccordionItem(
                questions[idx],
                questions[idx].actualIndex != undefined ? questions[idx].actualIndex : idx
            );
            visibleArticleQuestions = idx + 1;
        }
    } else {
        currentArticleQuestions = [];
        accordionItems += '<li><div class="center-text">No related questions found</div></li>';
    }

    return `
    <ul class="accordion-items-container">
        ${accordionItems}
    </ul>
    `;
}

function getAccordionItem(question, index, isDynamic) {
    return `
    <li class="accordion-item ${isDynamic ? "accordion-item-animate" : ""}" >
        <div class="qns-accordion-item">
            <h4 class="accordion-heading-container">
                <span class="accordion-heading">${question.Question}</span>
                <span class="accordion-toggle-icon arrow-down"></span>
            </h4>
            <div class="accordion-body-container" >
                <div class="accordion-body">
                <div class="article-answer">${question.AnswerBody}</div>
                <a href="article.html?articleIndex=${articleIndex}&isRelatedArticle=true&questionIndex=${index}" class="answer-url">
                    ${question.AnswerTitle}
                </a>
                <span class="article-answer-url answer-url">${question.AnswerUrl}</span>
                </div>
            </div>
        </div>
    </li>
    `;
}

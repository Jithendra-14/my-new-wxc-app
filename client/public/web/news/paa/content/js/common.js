function getArticlesWithQuestions(questions) {
    var articles = [];

    var articleList = {};

    if (questions) {
        questions.forEach(function(question) {
            var article;
            if (articleList[question.ArticleTitle]) {
                article = articles.filter(function(item) {
                    return item.ArticleTitle == question.ArticleTitle;
                })[0];
            } else {
                articleList[question.ArticleTitle] = true;
                article = {
                    ArticleTitle: question.ArticleTitle,
                    ArticleUrl: question.ArticleUrl,
                    ArticleSnippet: question.ArticleSnippet,
                    ArticleContent: question.ArticleContent,
                    ArticleImageThumbnailUrl: question.ArticleImageThumbnailUrl,
                    ArticleDatePublished: question.ArticleDatePublished,
                    ArticleProviderName: question.ArticleProviderName,
                    ArticleProviderLogoUrl: question.ArticleProviderLogoUrl,
                    Questions: [],
                };
                articles.push(article);
            }

            if (article) {
                article.Questions.push({
                    Question: question.Question,
                    AnswerBody: question.AnswerBody,
                    AnswerTitle: question.AnswerTitle,
                    AnswerUrl: question.AnswerUrl,
                    AnswerImageThumbnailUrl: question.AnswerImageThumbnailUrl,
                    AnswerDatePublished: question.AnswerDatePublished,
                    AnswerContent: question.AnswerContent,
                    AnswerProviderName: question.AnswerProviderName,
                    AnswerProviderLogoUrl: question.AnswerProviderLogoUrl,
                });
            }
        });
    } else {
        mainContainer.append('<div class="center-text">Error while fetching the data...</div>');
    }

    return articles;
}

function formatDate(inputDate) {
    var date = new Date(inputDate.replace(/-/g, "/"));
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = Math.round(date.getHours());
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = Math.round(diffSec / 60);
    let diffHour = Math.round(diffMin / 60);

    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? "0" + month : month;
    dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    if (diffSec < 1) {
        return "just now";
    } else if (diffMin < 1) {
        return `${diffSec} sec ago`;
    } else if (diffHour < 1) {
        return `${diffMin} mins ago`;
    } else if (diffHour < 24) {
        return `${diffHour} hrs ago`;
    } else {
        return date.toDateString();
    }
}

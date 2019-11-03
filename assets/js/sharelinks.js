window.onload = setShareLinks;

function setShareLinks() {
    var pageUrl = encodeURIComponent(document.URL);
    var description = document.querySelector("meta[property='og:description']").getAttribute("content");
    var description = encodeURIComponent(description);
    var media = document.querySelector("meta[property='og:image']").getAttribute("content");
    var media = encodeURIComponent(description);

    elements = document.querySelectorAll(".social-icon.facebook");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
            socialWindow(url);
        });
    });

    elements = document.querySelectorAll(".social-icon.twitter");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + description;
            socialWindow(url);
        });
    });

    elements = document.querySelectorAll(".social-icon.linkedin");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
            socialWindow(url);
        });
    });

    elements = document.querySelectorAll(".social-icon.whatsapp");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://wa.me/?text=" + description;
            socialWindow(url);
        });
    });

    elements = document.querySelectorAll(".social-icon.pinterest");
    Array.prototype.forEach.call(elements, function(el) {
        el.addEventListener("click", function() {
            url = "https://www.pinterest.com/pin/create/button/?url=" + pageUrl + "&media="+ media + "&description=" + description;
            socialWindow(url);
        });
    });
};

function socialWindow(url) {
    window.open(url,"NewWindow","");
};
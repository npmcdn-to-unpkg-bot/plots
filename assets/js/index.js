function trackUrl(url) {
    /*if (_gaq) {
        _gaq.push(['_trackPageview', url]);
    }*/
}

var viewTemplates = {};
viewTemplates['layout:4'] = [
        '<div class="large-12 medium-12 small-12 columns cr-portfolio-row cr-row-even cr-row-{{idx}}">',
        '<div class="{{col.[0]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad medium-only-bottom-pad small-no-right-pad">',
            '{{#with categories.[0]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="0"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
        '<div class="{{col.[1]}} columns cr-portfolio-entry cr-pside-pad medium-no-right-pad medium-small-bottom-pad medium-only-bottom-pad medium-no-right-pad small-no-right-pad">',
            '{{#with categories.[1]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="1"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
        '<div class="{{col.[2]}} columns cr-portfolio-entry cr-pside-pad small-no-right-pad medium-small-bottom-pad">',
            '{{#with categories.[2]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="2"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
        '<div class="{{col.[3]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad">',
            '{{#with categories.[3]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail  hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="3"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
           '{{/with}}',
        '</div>',
    '</div>'].join('');
    
viewTemplates['layout:3'] = [
        '<div class="large-12 medium-12 small-12 columns cr-portfolio-row cr-row-even cr-row-{{idx}}">',
        '<div class="{{col.[0]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad small-no-right-pad">',
            '{{#with categories.[0]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="0"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
        '<div class="{{col.[1]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad small-no-right-pad">',
            '{{#with categories.[1]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="1"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
        '<div class="{{col.[2]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad">',
            '{{#with categories.[2]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="2"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
    '</div>'].join('');
    

viewTemplates['layout:3square'] = [
        '<div class="large-12 medium-12 small-12 columns cr-portfolio-row cr-row-even cr-row-{{idx}}">',
        '<div class="{{col.[0]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad small-no-right-pad">',
            '{{#with categories.[0]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="0"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
        '<div class="{{col.[1]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad small-no-right-pad">',
            '{{#with categories.[1]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="1"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
        '<div class="{{col.[2]}} columns cr-portfolio-entry cr-pside-pad medium-small-bottom-pad">',
            '{{#with categories.[2]}}',
                '<div class="cr-portfolio-load" id="cr-cat-{{this}}" data-cat="{{this}}">',
                    '<img src="" class="cr-loader" />',
                    '<span class="cr-p-load-fail hidden">failed to load category</span>',
                '</div>',
                '<div class="cr-pentry-{{this}} cr-p-image neutral" data-idx="2"><div class="cr-cat-name"><span class="cr-cat-name-t"></span><br /><span class="cr-cat-name-pl"></span></div></div>',
            '{{/with}}',
        '</div>',
    '</div>'].join('');


viewTemplates['portfolio-category-template'] = [
    '<div class="large-4 medium-4 small-12 columns cr-portfolio-category-desc">',
            '{{#each desc}}',
                '{{{this}}}',
            '{{/each}}',
        '</div>',
        '<div class="large-8 medium-8 small-12 columns cr-portfolio-category-pictures">',
            '<div class="cr-portfolio-list">',
                '{{#each images}}',
                   '<div class="cr-portfolio-image"><img src="{{this}}"/></div>',
                '{{/each}}',
            '</div>',
        '</div>'].join('');


viewTemplates['back-button-template'] = [
    '<div class="cr-button-c">',
           '<div class="cr-bc">',
                '<div class="cr-lt"></div><div class="cr-lb"></div><div class="cr-rt"></div><div class="cr-rb"></div>',
                '<a href="{{href}}" class="cr-back-button">{{text}}</a>',
            '</div>',
        '</div>'].join('');
        
viewTemplates['static-page-template'] = '<div class="large-12 medium-12 small-12 columns cr-static-load-content"></div>';


var layouts = {};
layouts['layout:4'] = {
        colEven: ['large-2 medium-6 small-12', 'large-4 medium-6 small-12', 'large-2 medium-6 small-12','large-4 medium-6 small-12'],
        colOdd: ['large-4 medium-6 small-12', 'large-2 medium-6 small-12', 'large-4 medium-6 small-12','large-2 medium-6 small-12'],
        rowAt: 4
    };
    
layouts['layout:3'] = {
        colEven: ['large-3 medium-3 small-12', 'large-3 medium-3 small-12', 'large-6 medium-6 small-12'],
        colOdd: ['large-6 medium-6 small-12', 'large-3 medium-3 small-12', 'large-3 medium-3 small-12'],
        rowAt: 3
    };

layouts['layout:3square'] = {
        colEven: ['large-4 medium-4 small-12', 'large-4 medium-4 small-12', 'large-4 medium-4 small-12'],
        colOdd: ['large-4 medium-4 small-12', 'large-4 medium-4 small-12', 'large-4 medium-4 small-12'],
        rowAt: 3,
        auto: true
    };



var defaultPortfolioImageHeight = 200;

var currentPage = 1;
var portfolioRowTemplate, portfolioCategoryTemplate, backButtonTemplate, staticPageTemplate; 
var portfolio = {};
var portfolioPages = [];
var portfolioImageHeight = defaultPortfolioImageHeight;
var portfolioImageHeightAuto = false;
var portfolioLoaded = false;
var homeLoaded = false;
var autoHeight = defaultPortfolioImageHeight;
var categoryNames = {};
var categoryPlayers = {};
var categoryStatuses = {};
var statuses = {};
var playersSet = [];
var checkedPeople = [];

var hashRedirect = {};
hashRedirect['/portfolio'] = hashRedirect['/portfolio/'] = '/';
hashRedirect['/blog'] = hashRedirect['/blog/'] = '/#/blog';

function getUrl(url) {
    return window.location.protocol + '//'+ window.location.hostname + (location.port ? ':'+location.port: '') + url;
}

function getLayoutFromTag(tagString) {
    var layout = layouts['layout:4'];
    portfolioRowTemplate = Handlebars.compile(viewTemplates['layout:4']);

    var checkOut = true;
    var tags = tagString.split('|');
    for (var i = 0; i < tags.length; i++) {
        var tag = $.trim(tags[i]);
        if (tag.indexOf('layout') !== -1 && layouts[tag]) {
            portfolioRowTemplate = Handlebars.compile(viewTemplates[tag]);
            layout = layouts[tag];
        } else if (tag.indexOf('image_height') !== -1) {
            var h = parseInt(tag.replace("image_height:", ""));
            if (isNaN(h)) {
                checkAuto = true;
                portfolioImageHeight = defaultPortfolioImageHeight;
            } else {
                portfolioImageHeight = h;
            }
        }
    }
    
    if (checkOut) {
        if (layout.auto) {
            portfolioImageHeightAuto = true;
            $(window).resize(function(){
                adjustSizes();
            });

        }
    }
    
    return layout;
}


function getPortfolioPages(callback) {
    if (portfolioLoaded) {
        callback(portfolioPages);
    } else {
        loadPage('/portfolio', function(data) {
            parsePortfolioList(data, function() {
                portfolioLoaded = true;
                portfolioLoaded = true;
                callback(portfolioPages);
            });
        });
    }
}



function scrollToTop(p) {
    var d = (p || "normal");
    //$("html, body").animate({ scrollTop: 0 }, d);
    $("html, body").scrollTop(0);

}

/**** PAGE ELEMENTS ****/

function showFooter() {
    $('.cr-footer-content').fadeIn();
}

function hideFooter() {
    $('.cr-footer-content').fadeOut(200);
}

function hideActiveElement(dur, callback, load) {
    if ($('.cr-active').length === 0) {
        $('.cr-acontent').hide();
        return callback();
    }
    $('.cr-active').fadeOut(dur, function() {
        $('.cr-acontent').removeClass('cr-active');
        callback();
    });
}

/**** PORTFOLIO *****/

function determineCategorySep(cs) {
    var sep = (cs.indexOf('<br>') != -1 ? '<br>' : null);
    if (!sep) {
        sep = (cs.indexOf('<br>') != -1 ? '<br/>' : null);
    }
    return (sep || '|');
}

function preparePortfolioListNames(lst) {
    for(var i = 0; i < lst.length; i++) {
        var name = $.trim(lst[i]).toLowerCase();
        status = name.split(':')[2];
        players = name.split(':')[1];
        name = name.split(':')[0];
        lst[i] = name.replace("'",'').split(' ').join('-');

        categoryNames[lst[i]] = name;
        categoryPlayers[lst[i]] = players;
        categoryStatuses[lst[i]] = status;

        players = players.split(',');
	     for (var player in players) {
            var playerName = players[player].trim().charAt(0).toUpperCase() + players[player].trim().slice(1);
  	         if ($.inArray(playerName, playersSet) === -1 ) playersSet.push(playerName);
	     }

	     addPageStatus(status, lst[i]);
        portfolioPages.push(lst[i]);
    }
}

function addPageStatus(status, name) {
    if(!statuses.hasOwnProperty(status)) {
       statuses[status] = [];
    }
    statuses[status].push(name);
}

function processCategoryList(lst, layout) {
    var categoryRow = [];
    for (var i = 0; i < lst.length; i++) {
        categoryRow.push(lst[i]);
        if (categoryRow.length === layout.rowAt) {
            processCategoryRow(categoryRow.slice(0), layout);
            categoryRow = [];
        }
    }
    
    if (categoryRow.length > 0) {
        processCategoryRow(categoryRow, layout);
    }
}

function processCategoryRow(row, layout) {
    var rowCount = $('.cr-portfolio-page').children('.cr-portfolio-row').length;
    var isEven = (rowCount % 2 === 0);
    var template = portfolioRowTemplate; 
    var content = {categories:row, idx:rowCount};
    content.col = (isEven ? layout.colEven : layout.colOdd);
    var prow = template(content);
    $('.cr-portfolio-page').append(prow);
    $('.cr-row-' + rowCount).find('.cr-portfolio-load').each(function() {
        $($(this).find('.cr-loader')[0]).attr('src', $('#cr-p-load-img').attr('src'));
        loadPortfolioCategory($(this).attr('data-cat'));
    });
}

function parsePortfolioList(data, callback) {
    var $response = $(data).find('.cr-page-content');
    if ($response.length === 0) {
        alert('404, static page was not found');
        return;
    }
    var layout = getLayoutFromTag($response.attr('data-cr-tags'));
    $response.find('p').each(function() {
        var categoryContent = $.trim($(this).html());
        if (categoryContent.length > 0) {
            var sep = determineCategorySep(categoryContent);
            var categoryList = categoryContent.split(sep);
            preparePortfolioListNames(categoryList);
	         addPlayerSelectorRow(playersSet);
            processStatusList(layout);
           // processCategoryList(categoryList.slice(0,5), layout);
           // processCategoryList(categoryList.slice(6), layout);
        }
    });
    if (callback) {
        callback();
    } else {
        displayPortfolio();
    }
}

function addPlayerSelectorRow(set) {
    set.sort();
    
    var checkboxBlock = "<div id='players'><table><tr>";
    for(var i = 0; i < set.length; i++) {
       var entry = set[i];
       var checkbox = "<td><input type='checkbox' name='" + entry + "' id=\"checkbox-" + i + "\" onclick=\"check(this)\" /><label for=\"checkbox-" + i + "\"></label><label for=\"checkbox-" + i + "\">" + entry + "\t</label></td>";
       checkboxBlock = checkboxBlock + checkbox;
    }

    checkboxBlock += '</tr></table><div style="width: 100%; height: 1px; background: #000; overflow: hidden;"/></div>';
    checkboxBlock += "<input type='image' id='show' src='/assets/css/images/arrow-down.png' alt='' align='right' width='25' height='25'>";
    checkboxBlock += "<input type='image' id='hide' src='/assets/css/images/arrow-up.png' alt='' align='right' width='25' height='25'>";
    $('.cr-portfolio-page').append(checkboxBlock);

    $("#players").hide();
    $("#hide").hide();

    $("#hide").click(function() {
            $("#players").slideUp('slow');
            $("#hide").hide();
            $("#show").show();
        });
    $("#show").click(function() {
            $("#players").slideDown('slow');
            $("#show").hide();
            $("#hide").show();
        });
}

function check(checkBox) {
    if ($.inArray(checkBox.name, checkedPeople) > -1) {
       checkedPeople.splice(checkedPeople.indexOf(checkBox.name), 1);
    } 
    else {
       checkedPeople.push(checkBox.name);
    }
    addHighlights(checkedPeople);
}

function addHighlights(tags) {
   var remove = false;
   if ($.isEmptyObject(tags)) remove = true;
   for (var key in categoryNames) {
      if (remove) {
	       $('.cr-pentry-' + key).removeClass("unselected").removeClass("selected");
          continue;
      }
      var approved = true;
      for (var tag in tags) {
          if (categoryPlayers[key].indexOf(tags[tag].toLowerCase()) === -1) approved = false;
      }
      if (approved) {
          $('.cr-pentry-' + key).addClass("selected").removeClass("unselected");
      }
      else {
          $('.cr-pentry-' + key).addClass("unselected").removeClass("selected");
      }

   }
}

function processStatusList(layout){
    for (var status in statuses) {
        var header = '<div class="status-header-title">' + status.toUpperCase().replace('_',' ') + '</div>';
        $('.cr-portfolio-page').append(header);
        processCategoryList(statuses[status], layout);
    }
}

function displayHome() {
    loadPage('/portfolio', function(data) {
        parsePortfolioList(data);
        showFooter();
        homeLoaded = true;
        portfolioLoaded = true;
    });
}

function loadPage(url, callback) {
    trackUrl(url);
    $.ajax({
        type: "GET",
        url: url  + '/?_pc_remove_args=true',
        cache: false,
        dataType: 'html',
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, error) {      
            alert(error);
        },
        complete: function(){ 
        }, 
        statusCode: {
            404: function(xhr) {
                alert('Page ' + url + ' was not found. Please check your blog configuration and try again.');
            }
        }
    });
}

/**** Portfolio load ****/

function loadPortfolioCategory(categoryName) {
    var category = $.trim(categoryName);
    if (category.length === 0) {
        return;
    }
    
    $('#cr-cat-' + categoryName).parent().children('.cr-cor').removeClass('hidden');
    loadPortfolioPage(categoryName);
}

function loadPortfolioPage(portfolioPage, callback) {
    trackUrl('/' + portfolioPage);
    $.ajax({
        type: "GET",
        url: '/' + portfolioPage + '/?_pc_remove_args=true',
        cache: false,
        dataType: 'html',
        success: function(data) {
            $("#cr-cat-" + portfolioPage + " > .cr-loader").addClass('hidden');
            portfolio[portfolioPage] = parsePortfolioPage(portfolioPage, data);

        },
        error: function(xhr, status, error) {      
            displayPortfolioError(portfolioPage, error);
        },
        complete: function(){ 
        }, 
        statusCode: {
            404: function(xhr) {
                displayPortfolioError(portfolioPage, "404<br>failed to load");
            }
        }
    });
}

function displayPortfolioError(portfolioPage, msg) {
    $("#cr-cat-" + portfolioPage + " > .cr-loader").addClass('hidden');
    $("#cr-cat-" + portfolioPage + " > .cr-p-load-fail").html(msg).removeClass('hidden');
}

function parsePortfolioPage(portfolioPage, data) {
    // prevent images from loading when transformed into DOM 
    if (data.replace) {
        data = data.replace(/src=/gi, 'isrc=');
    }
    var $response = $(data).find('.cr-page-content');
    if ($response.length === 0) {
        console.log('404, static page was not found. The content of this page is not portfolio page.');
        return null;
    }
    
    var page = {};
    page.images = [];
    page.desc = [];
    $("#cr-cat-" + portfolioPage).addClass('hidden');
    $response.find('img').each(function() {
        var portfolioImage = ($(this).attr('isrc') ? $(this).attr('isrc') : $(this).attr('src'));
        page.images.push(portfolioImage);
        if (page.images.length === 1) {
            var entryId = '.cr-pentry-' + portfolioPage;
            var parent = $(entryId).parent();
            var width = parent.width();
            if (portfolioImageHeightAuto) {
                parent.css('height', $(entryId).width() + "px");
            } else {
                parent.css('height', portfolioImageHeight + "px");
            }
            $(entryId).css('background-image', 'url(' + portfolioImage + ')');
            initPortfolioActions(parent);
        }
    });
    $response.find('img').remove();
    $response.find('p').filter(function() {
        return $.trim($(this).text()) === '' && $(this).children().length == 0
    }).remove();
    page.desc.push($.trim($response.html()));
    adjustSizes();
    return page;
}

// adjust sizes just in case a large image was loaded first
function adjustSizes() {
    autoHeight = 0;
    $('.cr-portfolio-entry').each(function() {
        var elHeight = portfolioImageHeight;
        if (portfolioImageHeightAuto) {
            if (autoHeight === 0) {
                autoHeight = $(this).width();
            }
            elHeight = autoHeight;
        } else {
           elHeight = portfolioImageHeight;
        }
        
        $(this).css('height', elHeight + "px");
        var catName = $(this).find('.cr-cat-name-t')[0];
        var catNameCon = $(this).find('.cr-cat-name')[0];
        if ($(catName).height()) {
            $(catNameCon).css('padding-top', parseInt((elHeight/2 + $(catName).height()/2) - 5) + "px");
        }
    });
}

function initPortfolioActions(parent) {
    var name = $(parent.children('.cr-portfolio-load')[0]).attr('data-cat');
    $(parent.find('.cr-cat-name-t')[0]).html(categoryNames[name]);
    $(parent.find('.cr-cat-name-pl')[0]).html(categoryPlayers[name]);
    $(parent).addClass(categoryStatuses[name]);

    parent.mouseenter(function(event) {
        $(parent.find('.cr-cat-name')[0]).fadeIn();
    });
    parent.mouseleave(function(event) {
        $(parent.find('.cr-cat-name')[0]).fadeOut();
    });
    parent.click(function(event) {
        var name = $($(this).children('.cr-portfolio-load')[0]).attr('data-cat');
        displayCategory(name, portfolio[name]);
    });
}


/**** DISPLAY FUNCTIONS *****/

function prepareForSwitch() {
    hidePageLoad();
    hideFooter();
}

function finishSwitch() {
    showFooter();
}

function showPageLoad() {
    $(".cr-load-ind").show();
}

function hidePageLoad() {
    if ($(".cr-load-ind").is(":visible")) {     
        $(".cr-load-ind").hide();
    }
}
    
function displayCategory(name, categoryObject, nopush) {
    if (!nopush) {
        lnkPushState(name);
    }
    prepareForSwitch();    
    var elToShow = $('.cr-portfolio-category-content');
    hideActiveElement(400, function() {
        elToShow.empty();
        var prow = portfolioCategoryTemplate(categoryObject);
        var backButton = backButtonTemplate({href:"/",text:"BACK TO THE LIST"});
        elToShow.append(prow);
        $(elToShow.children('.cr-portfolio-category-pictures')[0]).append(backButton);
        elToShow.fadeIn(400, function() {
            initializeBackButton(displayPortfolio);
            elToShow.addClass('cr-active');
            finishSwitch();
            scrollToTop(0);
        });
    });
}

function initializeBackButton(func) {
    $('.cr-back-button').unbind('click').click(function(event) {
        if (!homeLoaded) {
            window.location.href = '/';
            return;
        }
        
        lnkPushState($(this).attr('href'));
        event.preventDefault();
        func();
    });
}

function displayPortfolio() {
    lnkPushState();
    prepareForSwitch();
    var elToShow = $('.cr-portfolio-page');
    hideActiveElement(400, function() {
        elToShow.fadeIn(400, function() {
            elToShow.addClass('cr-active');
            adjustSizes();
            finishSwitch();
            scrollToTop(0);
        });
    });
}

function displayContent() {
   
}

/**** blog ****/

function displayBlogPageLoaded() {
    var elToShow = $('.cr-single-post-content');
    hideActiveElement(400, function() {
        elToShow.fadeIn(400, function() {
            $('.cr-single-post').appendTo('.cr-single-post-content');
            elToShow.addClass('cr-active');
            initializeBackButton(backToBlog);
            $(".post-content").fitVids();
            finishSwitch();
        });
    });
}

function displayBlogPage(url) {
    var elToShow = $('.cr-single-post-content');
    scrollToTop(0);
    prepareForSwitch();  
    hideActiveElement(400, function() {
        showPageLoad();
        trackUrl(url);
        elToShow.load((url + '?_pc_remove_args=true') + " .cr-single-post>*", function() {
            hidePageLoad();
            elToShow.fadeIn(400, function() {
                elToShow.addClass('cr-active');
                initializeBackButton(backToBlog);
                $(".post-content").fitVids();
                finishSwitch();
            });
        });
    });
}

function initializeBlogLinks() {
    $('.cr-post-link').unbind('click').click(function(event) {
        var href = $(this).attr('href');
        lnkPushState(href);
        event.preventDefault();
        displayBlogPage(href);
    });
    $('.cr-load-post-page').unbind('click').click(function(event) {
        event.preventDefault();
        var url = $(this).attr('href');
        var listEl = $('.cr-post-list'), loadEl = $('.cr-load-post-page');
        listEl.fadeOut(400, function() {
            loadEl.show();
            trackUrl(url);
            listEl.load((url  + '?_pc_remove_args=true') + " .cr-post-list>*", function() {
                loadEl.hide();
                listEl.fadeIn();
                initializeBlogLinks();
            });
        });
    });
}

function displayBlog() {
    prepareForSwitch();
    var elToShow = $('.cr-blogs');
    hideActiveElement(400, function() {
        elToShow.fadeIn(400, function() {
            elToShow.addClass('cr-active');
            initializeBlogLinks();
            finishSwitch();
        });
    });
}

function backToBlog() {
    prepareForSwitch();
    var elToShow = $('.cr-blogs');
    hideActiveElement(400, function() {
        elToShow.fadeIn(400, function() {
            elToShow.addClass('cr-active');
            finishSwitch();
        });
    });
}


/**** static pages ****/

function prepareForStatic(elToShow) {
    elToShow.empty();
    elToShow.append(staticPageTemplate({}));
}

function displayStaticPageElement(elToShow) {
    prepareForSwitch();
    scrollToTop(0);
    hideActiveElement(400, function() {
        elToShow.fadeIn(400, function() {
            elToShow.addClass('cr-active');
            finishSwitch();
        });
    });
}

function displayLoadedStaticPage(url) {
    var $response = $('.cr-blogs').find('.cr-page-content');
    if ($response.length === 0) {
        if ($('.cr-single-static-content').find('.cr-page-content').length != 0) return;
        console.log('404, static page was not found. The content of this page is not portfolio page.');
        return window.location.href = '/' + url;
    }
    var elToShow = $('.cr-single-static-content');
    prepareForStatic(elToShow);
    $(elToShow.children('.cr-static-load-content')[0]).append($response);
    displayStaticPageElement(elToShow);
}

function displayTagIndex(url) {
    var $response = $('.cr-blogs').find('.cr-page-content');
    if ($response.length === 0) {
        console.log('404, static page was not found. The content of this page is not portfolio page.');
        return window.location.href = '/' + url;
    }
    var elToShow = $('.cr-tag-list');
    elToShow.append($response);
    hideActiveElement(400, function() {
        elToShow.fadeIn(400, function() {
            elToShow.addClass('cr-active');
            finishSwitch();
        });
    });
}

function displayStaticPage(url) {
    var elToShow = $('.cr-single-static-content');
    prepareForSwitch();
    hideActiveElement(400, function() {
        showPageLoad();
        prepareForStatic(elToShow);
        trackUrl(url);
        $(elToShow.children('.cr-static-load-content')[0]).load((url + '?_pc_remove_args=true') + " .cr-page-content>*", function() {
            displayStaticPageElement(elToShow);
            finishSwitch();
        });
    });
}


function initializeActions() {
    $('.cr-menu-blog').click(function(event) {
        if (!homeLoaded) {
            window.location.href = '/blog';
            return;
        }
        lnkPushState("/#/blog");
        event.preventDefault();
        displayBlog();
    });
    
    $('.cr-menu-static').click(function(event) {
        lnkPushState($(this).attr('href'));
        event.preventDefault();
        displayStaticPage($(this).attr('href'));
    });
}



function determinePath(path) {
    if (path == '/') {
        displayPortfolioOrRefresh();
    } else if (path == '/#/blog') {
        backToBlog();
    } else if (portfolio[path]) {
        displayCategory(path, portfolio[path]);
    } else if ($(".cr-blogs").is(":visible")) {
        // Might need to put this into static page?
        displayBlogPage(path);
    } else {
        determineStatic();
    }
}


/**** push state ****/

function pageNotFound(url) {
    alert('Page ' + url + ' was not found');
}

function determineStatic() {
    var pageName = window.location.pathname.toLowerCase();//.replace(/\//gi,'');
    var noSlash = pageName.replace(/\//gi,'');

    getPortfolioPages(function(pages) {
        if ($.inArray(noSlash, pages) >= 0) {
            // load portfolio page
            var portfolioPage = parsePortfolioPage(noSlash, $('body'));
            if (portfolioPage) {
                displayCategory(name, portfolioPage, true);
            } else {
                pageNotFound(noSlash);
            }
        } else if ($(".cr-single-post").length > 0) {
            displayBlogPageLoaded(pageName);
        } else if (window.location.pathname.indexOf('tag') !== 1) {
            // static page (about, etc.)
            displayLoadedStaticPage(pageName);
        } else {
	         displayTagIndex(pageName);
	}
    });
}


function lnkPushState(url) {
    var pushurl = url || '/';
    history.pushState({path: pushurl}, '', pushurl);
}

function displayPortfolioOrRefresh() {
    if (!homeLoaded) {
        return displayHome();
    }
    displayPortfolio();
}

$(window).bind('popstate', function(event) {
    var state = event.originalEvent.state;
    if (state && state.path) {
        determinePath(state.path);
    }
});

(function ($) {
    "use strict";

    $(document).ready(function() {
        portfolioCategoryTemplate = Handlebars.compile(viewTemplates['portfolio-category-template']);
        backButtonTemplate = Handlebars.compile(viewTemplates['back-button-template']);
        staticPageTemplate = Handlebars.compile(viewTemplates['static-page-template']);
        
        initializeActions();

        if (window.location.pathname == '/' && !window.location.hash) {
            displayHome();
        } else if (window.location.hash) {
            if (window.location.hash == '#/blog') {
                lnkPushState("/#/blog");
                displayBlog();
            }
        } else if (hashRedirect[window.location.pathname]) {
            window.location.href = hashRedirect[window.location.pathname];
        } else {
            determinePath(window.location.pathname);
        }
        
    });

}(jQuery));

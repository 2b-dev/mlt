$(function(){
    closeNavMenu = function(){
        $('.menu-nav-trigger').prop('checked',false);
    }

    $('body').on('click', '.nal-list-item.-js',(closeNavMenu));


    // SHOW MODAL
    showModal = function(modalID){
        $('.modal.-show').removeClass('-show');
        $('#'+modalID).addClass('-show');
    }

    $('body').on('click','.call-modal',function(e){
        var modalTarget = $(this).data('modal');
        showModal(modalTarget);
        e.preventDefault();
    });

    //  HIDE MODAL
    hideModal = function(){
        $('.modal.-show').removeClass('-show');
    }
    
    $('body').on('click','.hide-modal', (hideModal));
    $('body').on('click','.modal-overlay.-js', (hideModal));


    // DROPDOWN
    $('body').on('click','.dd-list-item.-js', function(){
        
        var customDropdownElm = $(this).closest('.custom-dropdown');

        if($(customDropdownElm).hasClass('-actived')){
            $(customDropdownElm).removeClass('-actived');
            
        } else {
            $('.custom-dropdown.-actived').removeClass('-actived');
            $(customDropdownElm).addClass('-actived');
        }

        $(customDropdownElm).find('.dd-list-item.-actived').removeClass('-actived');
        $(this).addClass('-actived');
    });


    $(document).on('click touchend',function(e){
		/* --- CUSTOM DROPDOWN LIST --- */
		if(!$(e.target).closest('.custom-dropdown').length && $('.custom-dropdown').hasClass('-actived')){
			$('.custom-dropdown.-actived').removeClass('-actived');
        }

        // ACTIVED ELEMENT
        if(!$(e.target).closest('.comment-nav').length && $('.comment-nav').hasClass('-actived')){
			$('.comment-nav.-actived').removeClass('-actived');
        }
    });


    // NEXT PAGE
    toNextPage = function(next){
        $('.page-content.-actived').removeClass('-actived');
        $('.'+next).addClass('-actived');
    }

    $('body').on('click','.next-page',function(){
        var nextPage = $(this).data('next');
        toNextPage(nextPage);
    });


    // PREV PAGE
    toPrevPage = function(pre){
        $('.page-content.-actived').removeClass('-actived');
        $('.'+pre).addClass('-actived');
    }

    $('body').on('click','.prev-page',function(){
        var prevPage = $(this).data('prev');
        toPrevPage(prevPage);
    });


    // TOGGLE STAR
    $('body').on('click','.star-button.-js',function(){
        var rateStarBox = $(this).closest('.rate-star-block');

        if($(this).hasClass('-actived')){
            $(this).removeClass('-actived');

        } else {
            rateStarBox.find('.star-button.-actived').removeClass('-actived');
            $(this).addClass('-actived');
        }
    });


    // TOGGLE ACTIVED ELM
    $('body').on('click','.toggle-actived-elm',function(){
        
        if($(this).hasClass('-actived')){
            $(this).removeClass('-actived');

        } else {
            $('.comment-nav.-actived').removeClass('-actived');
            $(this).addClass('-actived');
        }
    });


    $('body').on('click','.toggle-txt-btn',function(){
        var targetElm = $(this).data('target');

        $('#'+targetElm).toggleClass('-actived');
        $(this).toggleClass('-actived');
    });
});
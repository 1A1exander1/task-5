$(function(){
    $('ul.links li:first').addClass('active');
    $('.box article').hide();
    $('.box article:first').show();
    $('ul.links li').on('click',function(){
      $('ul.links li').removeClass('active');
      $(this).addClass('active')
      $('.box article').hide();
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).show();
      return false;
    });
  })
  $(function(){
    $('div.btn-content button:first').addClass('active');
    $('.box-1 div').hide();
    $('.box-3 div').hide();
    $('.box-2 div').hide();
    $('.box-1 div:first').show();
    $('div.btn-content button').on('click',function(){
      $('div.btn-content button').removeClass('active');
      $(this).addClass('active')
      $('.box-1 div').hide();
      $('.box-3 div').hide();
      $('.box-2 div').hide();
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).show();
      return false;
    });
  })
  $(function(){
    $('ul.list li:first').addClass('active');
    $('.box-2 div').hide();
    $('.box-3 div').hide();
    $('.box-2 div:first').show();
    $('ul.list li').on('click',function(){
      $('ul.list li').removeClass('active');
      $(this).addClass('active')
      $('.box-2 div').hide();
      $('.box-3 div').hide();
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).show();
      return false;
    });
  })
  $(function(){
    $('ul.facilities li:first').addClass('active');
    $('.box-3 div').hide();
    $('.box-2 div').hide();
    $('.box-3 div:first').show();
    $('ul.facilities li').on('click',function(){
      $('ul.facilities li').removeClass('active');
      $(this).addClass('active')
      $('.box-3 div').hide();
      $('.box-2 div').hide();
      var activeTab = $(this).find('a').attr('href');
      $(activeTab).show();
      return false;
    });
  })
  let slider = document.getElementById('slider')
let selector = document.getElementById('selector')
let selectValue = document.getElementById('selectValue')
let progressBar = document.getElementById('progressBar')

selectValue.innerHTML = slider.value

slider.oninput = function() {
  selectValue.innerHTML = this.value
  selector.style.left = this.value + '%'
  progressBar.style.width = this.value + '%'
}
const VIOS_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxoC7m38rtHmDG7V8o868E5ON94zuzv2R_muvTRUIRyUz8RjpaWDlosWrEPlXvshtCImw/exec'

var forms = $("#register-form, #register-top-form, #register-bottom-form")
var serverlessForm = $("#register-form");
var topForm = $("#register-top-form");
var bottomForm = $("#register-bottom-form");

$( document ).ready(function() {
  $('input').val('')
  $('select').val('')
  $('.single-item').slick({
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    slidesToShow:1,
    });
  $('[name="Utm source"]').val(getUrlParameter('utm_source'))
  $('[name="Utm medium"]').val(getUrlParameter('utm_medium'))
  $('[name="Utm campaign"]').val(getUrlParameter('utm_campaign'))
  $('[name="Utm content"]').val(getUrlParameter('utm_content'))
  if ($(window).width() > 992) { 
    $('.slider-mobile').remove()
  } else {
    $('.slider-desktop').remove()
  }
})

// mobile menu
$('.menu-tab').click(function () {
  $('.menu-hide').addClass('show')
});
$('#close').click(() => {
  $('.menu-hide.show').removeClass('show')
})

$(window).scroll(function () {
  if ($(window).width() > 992) {
   
    var header = $('header'),
      scroll = $(window).scrollTop();
    resize()
    if (scroll >= 100) header.removeClass('glass');
    else header.addClass('glass');
  } 
});

function resize() {
  if ($(window).width() < 992) {
    $('header').removeClass('glass');
  }
}
resize();
$(window).on('resize', function () {
  resize();
});

const getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};


//
var dealer = {
  'Bà Rịa Vũng Tàu': ['(BRVT) ĐL Vũng Tàu'],
  'Bắc Giang': ['(Bắc Giang) ĐL Bắc Giang'],
  'Bắc Ninh': ['(Bắc Ninh) ĐL Bắc Ninh', '(Bắc Ninh) ĐL IDMC Từ Sơn'],
  'Hà Nội': ['(HN) Q.Hoàn Kiếm - ĐL Hoàn Kiếm', '(HN) Q.Hoàng Mai - ĐL Giải Phóng', '(HN) Q.Hoàng Mai - ĐL Giải Phóng CN Pháp Vân', '(HN) Q.Hà Đông - ĐL Hà Đông', '(Hà Nội) ĐL IDMC Hoài Đức', '(HN) Q.Long Biên - ĐL Long Biên', '(HN) Q.Nam Từ Liêm - ĐL Mỹ Đình', '(HN) Q. Nam Từ Liêm - ĐL Thái Hòa Từ Liêm', '(HN) Q.Cầu Giấy - ĐL Thăng Long', '(HN) Q.Thanh Xuân - ĐL Thanh Xuân'],
  'Hải Dương': ['(Hải Dương) ĐL Hải Dương'],
  'Hải Phòng': ['(Hải Phòng) ĐL Nankai Hải Phòng', '(Hải Phòng) ĐL Hải Phòng'],
  'Hòa Bình': ['(Hòa Bình) ĐL TNG Hòa Bình'],
  'Lào Cai': ['(Lào Cai) ĐL Lào Cai'],
  'Nam Định': ['(Nam Định) ĐL Giải Phóng'],
  'Phú Thọ': ['(Phú Thọ) ĐL IDMC Phú Thọ'],
  'Quảng Ninh': ['(Quảng Ninh) ĐL Cẩm Phả', '(Quảng Ninh) ĐL Quảng Ninh'],
  'Sơn La': ['(Sơn La) ĐL Tây Bắc'],
  'Thái Nguyên': ['(Thái Nguyên) ĐL Thái Nguyên'],
  'Hưng Yên': ['(Hưng Yên) ĐL Hưng Yên'],
  'Vĩnh Phúc': ['(Vĩnh Phúc) ĐL Toyota Hiroshima Vĩnh Phúc'],
  'Bình Định': ['(Bình Định) ĐL Bình Định'],
  'Bình Thuận': ['(Bình Thuận) ĐL Bình Thuận'],
  'Đà Nẵng': ['(Đà Nẵng) ĐL Đà Nẵng', '(Đà Nẵng) ĐL Okayama Đà Nẵng'],
  'Dak Lak': ['(Dak Lak) ĐL Buôn Mê Thuột', '(Dak Lak) ĐL Đắk Lắk'],
  'Gia Lai': ['(Gia Lai) ĐL Gia Lai'],
  'Hà Tĩnh': ['(Hà Tĩnh) ĐL Hà Tĩnh'],
  'Nghệ An': ['(Nghệ An) ĐL Sông Lam', '(Nghệ An) ĐL Vinh'],
  'Khánh Hòa': ['(Khánh Hòa) ĐL Nha Trang'],
  'Phú Yên': ['(Phú Yên) ĐL Phú Yên'],
  'Quảng Bình': ['(Quảng Bình) ĐL Quảng Bình'],
  'Thanh Hóa': ['(Thanh Hóa) ĐL Doanh Thu', '(Thanh Hóa) ĐL Thanh Hóa'],
  'Thừa Thiên Huế': ['(Thừa Thiên Huế) ĐL Huế'],
  'Hồ Chí Minh': ['(HCM) H.Bình Chánh - ĐL Asta Fukushima', '(HCM) Q.12 - ĐL An Sương', '(HCM) Q.12 - ĐL An Sương CN Trường Chinh', '(HCM) Q.1 - ĐL Bến Thành', '(HCM) Q.Bình Tân - ĐL Bến Thành', '(HCM) Q.1 - ĐL Bến Thành CN Chương Dương', '(HCM) Q.2 - ĐL Đông Sài Gòn', '(HCM) Q.GV - ĐL Đông Sài Gòn', '(HCM) Q.GV - ĐL Đông Sài Gòn - CN Nguyễn Văn Lương', '(HCM) Q.Bình Thạnh - ĐL Hiroshima Tân Cảng', '(HCM) Q.Thủ Đức - ĐL Hiroshima Long Phước', '(HCM) Q.Bình Tân - ĐL SAMCO CN Tân Tạo', '(HCM) Q.Tân Bình - ĐL Lý Thường Kiệt', '(HCM) Q.Tân Phú - ĐL Lý Thường Kiệt', '(HCM) Q.7 - ĐL Phú Mỹ Hưng (Tân Phong)', '(HCM) Q.7 - ĐL Phú Mỹ Hưng', '(HCM) Q.6 - ĐL Tsusho Saigon Motor Service', '(HCM) Q. Thủ Đức -  ĐL Đông Sài Gòn - CN Thủ Đức', '(HCM) Q.9 - ĐL Đông Sài Gòn -  CN Quận 9'],
  'Cần Thơ': ['(Cần Thơ) ĐL Cần Thơ CN An Giang', '(Cần Thơ) ĐL Cần Thơ', '(Cần Thơ) ĐL Ninh Kiều'],
  'Bà Rịa Vũng Tàu': ['(BRVT) ĐL Vũng Tàu'],
  'Bình Dương': ['(Bình Dương) ĐL Biên Hòa CN Bình Dương', '(Bình Dương) ĐL Bình Dương'],
  'Đồng Nai': ['(Đồng Nai) ĐL Biên Hòa', '(Đồng Nai) ĐL Biên Hòa CN Đồng Nai'],
  'Long An': ['(Long An) ĐL Long An'],
  'Tây Ninh': ['(Tây Ninh) ĐL Lý Thường Kiệt'],
  'Tiền Giang': ['(Tiền Giang) ĐL Tiền Giang'],
  'Vĩnh Long': ['(Vĩnh Long) ĐL Toyota Thập Nhất Phong Vĩnh Long'],
  'Bến Tre': ['(Bến Tre) ĐL Toyota Bến Tre']

}
forms.each(function () {
  const self = this;
  $(this).find('select[name="City"]').on('change', function () {
    let selectedRegion = $(this).find(':selected').val()
    $(self).find('select[disabled]').removeAttr('disabled')
    $(self).find('select[name="DLR"] option:not(:first-child)').remove()
    let dealers = dealer[selectedRegion]
    for (let dealer of dealers) {
      $(self).find('select[name="DLR"]').append(`<option value="${dealer}">${dealer}</option>`);
    }
  })
})

// submit form


$('[name="Utm source"]').val(getUrlParameter('utm_source'))
$('[name="Utm medium"]').val(getUrlParameter('utm_medium'))
$('[name="Utm campaign"]').val(getUrlParameter('utm_campaign'))
$('[name="Utm content"]').val(getUrlParameter('utm_content'))

forms.each(function () {
  const self = this
  $(this).validate({
    rules: {
      Name: "required",
      "Phone No.": {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 13
      },
      Email: {
        email: true
      },
      City: "required",
      DLR: "required",
      Demand: "required"
    },
    messages: {
      Name: "Vui lòng nhập họ tên.",
      "Phone No.": {
        required: "Vui lòng nhập số điện thoại.",
        number: "Số điện thoại định dạng không hợp lệ: số hợp lệ là số có 10 chữ số hoặc 11 chữ số, bắt đầu = 0 /+84",
        minlength: 'Số hợp lệ là số có 10 chữ số hoặc 11 chữ số, bắt đầu = 0 /+84',
        maxlength: 'Số hợp lệ là số có 10 chữ số hoặc 11 chữ số, bắt đầu = 0 /+84',
      },
      Email: {
        email: "Email không đúng định dạng."
      },
      City: "Vui lòng chọn tỉnh thành.",
      DLR: "Vui lòng chọn đại lý",
      Demand: "Thông tin này là bắt buộc.",
    },
    submitHandler: function (form) {
      $(self).find('.loading').addClass('loader')
      $(self).find('button').addClass('disabled')
      fetch(VIOS_SHEETS_URL, {
          method: 'POST',
          body: new FormData(form)
        })
        .then(res => {
          if (res['status'] == 200) {
            $('.close-toast').text('')
            $('.toast').addClass('fixed-toast').addClass('showing')
            $('.toast-notification .toast-message').html('<h4>Bạn đã đăng ký thành công</h4><p>Chúng tôi sẽ liên hệ với bạn trong thời gian ngắn nhất</p><button><a href="https://www.toyota.com.vn/vios-1-5e-mt-3-tui-khi">Để biết thêm chi tiết, mời bạn đến trang sản phẩm của toyota sau 1s</a></button>')
            $('.toast-notification').addClass('toast-show toast-success')
            setTimeout(function () {
              window.location.href="https://www.toyota.com.vn/vios-1-5e-mt-3-tui-khi"
            }, 5000);
            return true;
          } else {
            $(self).find('.loading').removeClass('loader')
            $(self).find('button').removeClass('disabled')
            $('.toast').addClass('error-toast')
            .find('.toast-notification')
            .addClass('toast-show toast-error')
            .find('.toast-message')
            .text('Đã có lỗi xảy ra, xin vui lòng thử lại')
            setTimeout(function () { 
              $('.toast').addClass('showing')
              $('.toast-notification .toast-message').text('Đã có lỗi xảy ra, xin vui lòng thử lại')
            },1000)
            setTimeout(function () {
              $('.toast').removeClass('showing').removeClass('error-toast')
              $('.toast-notification').removeClass('toast-show toast-error')
            }, 3000);
          }
        })
        .catch(error => {
          $(self).find('.loading').removeClass('loader')
          $(self).find('button').removeClass('disabled')
          $('.toast').addClass('error-toast')
          .find('.toast-notification')
          .addClass('toast-show toast-error')
          .find('.toast-message')
          .text('Đã có lỗi xảy ra, xin vui lòng thử lại')
          setTimeout(function () { 
            $('.toast').addClass('showing')
            $('.toast-notification .toast-message').text('Đã có lỗi xảy ra, xin vui lòng thử lại')
          },1000)
          setTimeout(function () {
            $('.toast').removeClass('showing').removeClass('error-toast')
            $('.toast-notification').removeClass('toast-show toast-error')
          }, 3000);
        })
    }
  })
});
$('.toast-notification.toast-show').click().removeClass('toast-show')


// change color
function changeCarColor(pill) {
  pill.find('ul li').on({
    'click': function () {
      pill.find('ul li.box-active').removeClass('box-active').end().end()
      $(this).addClass('box-active').end().end()
      pill.find('.product-container img').attr('src', `./images/vios/products/${$(this).attr('data-img')}`)
    }
  })
}

var pill1 = $('#pills-product1');
var pill2 = $('#pills-product2');
var pill3 = $('#pills-product3');
var pill4 = $('#pills-product4');
changeCarColor(pill1);
changeCarColor(pill2);
changeCarColor(pill3);
changeCarColor(pill4);

//  change model
function changeModel(productTab, pill, features) {
  productTab.on({
    'click': function () {
      $('.nav-link.active').removeClass('active').end().end();
      $(this).addClass('active');
      $('.tab-content:not(.hide)').addClass('hide').end().end();
      pill.removeClass('hide').end().end();
      $('#features-list .product-feature:not(.hide)').addClass('hide').end().end();
      features.removeClass('hide');
    }
  });
}

var productTab1 = $('#pills-product-tab-1');
var features1 = $('#features-list #feature-1');
var productTab2 = $('#pills-product-tab-2');
var features2 = $('#features-list #feature-2');
var productTab3 = $('#pills-product-tab-3');
var features3 = $('#features-list #feature-3');
var productTab4 = $('#pills-product-tab-4');
var features4 = $('#features-list #feature-4');
changeModel(productTab1, pill1, features1);
changeModel(productTab2, pill2, features2);
changeModel(productTab3, pill3, features3);
changeModel(productTab4, pill4, features4);
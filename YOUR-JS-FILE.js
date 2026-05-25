// ثبت پلاگین
gsap.registerPlugin(ScrollTrigger);

// انتخاب تمام پنل‌های افقی
let panels = gsap.utils.toArray(".horizontal-panel");

// ایجاد انیمیشن اسکرول افقی
gsap.to(panels, {
    xPercent: -100 * (panels.length - 1), // حرکت به سمت چپ (برای سایت‌های RTL باید +100 باشد، اما ساختار flex در اینجا LTR حرکت می‌کند)
    ease: "none",
    scrollTrigger: {
        trigger: ".horizontal-container",
        pin: true, // پین کردن کانتینر در جای خود تا زمانی که انیمیشن افقی تمام شود
        scrub: 1,  // اتصال نرم انیمیشن به اسکرول موس (عدد 1 یعنی کمی تاخیر نرم)
        end: () => "+=" + document.querySelector(".horizontal-wrapper").offsetWidth
    }
});
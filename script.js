// DOM元素选择
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.querySelector('.contact-form');

// 移动端导航菜单切换
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// 点击导航链接时关闭移动端菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// 滚动时导航栏透明度变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // 考虑固定导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 技能进度条动画
const animateSkillBars = () => {
    const skillsSection = document.querySelector('.skills');
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const windowHeight = window.innerHeight;
    
    if (window.scrollY + windowHeight > sectionTop + 100) {
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = bar.style.getPropertyValue('--width');
            }, index * 200);
        });
    }
};

// 页面元素渐入动画
const observeElements = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.project-card, .highlight-item, .skill-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// 打字机效果
const typewriterEffect = () => {
    const text = "Hello, I'm Xinyu Chen";
    const element = document.querySelector('.typing-animation');
    let index = 0;
    
    // 清空初始内容
    element.textContent = '';
    
    const typeWriter = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            // 添加光标闪烁效果
            element.style.borderRight = '2px solid white';
            element.style.animation = 'blink 1s infinite';
        }
    };
    
    setTimeout(typeWriter, 1000);
};

// 项目卡片悬停效果
const initProjectCards = () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
};

// 表单处理
const handleContactForm = () => {
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // 简单验证
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // 模拟发送邮件
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
};

// 邮箱验证
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// 通知显示
const showNotification = (message, type) => {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    `;
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    }
    
    document.body.appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 隐藏通知
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
};

// 滚动时导航链接高亮
const highlightCurrentSection = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
};

// 添加活跃导航链接样式
const addActiveNavStyle = () => {
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: var(--primary-color) !important;
        }
        
        .nav-link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);
};

// 滚动事件监听
window.addEventListener('scroll', () => {
    animateSkillBars();
    highlightCurrentSection();
});

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各种功能
    observeElements();
    typewriterEffect();
    initProjectCards();
    handleContactForm();
    addActiveNavStyle();
    
    // 预加载动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// 页面预加载动画样式
const addPreloadingStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: 'Loading...';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            z-index: 10000;
            animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
        
        body.loaded::before,
        body.loaded::after {
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(style);
};

// 初始化预加载样式
addPreloadingStyles();

// 处理窗口大小变化
window.addEventListener('resize', () => {
    // 重新计算技能条位置
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// 键盘导航支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// 添加更多视觉效果
const addVisualEnhancements = () => {
    // 鼠标跟随效果
    let mouseX = 0, mouseY = 0;
    let ballX = 0, ballY = 0;
    
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(37, 99, 235, 0.3), rgba(37, 99, 235, 0.1));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (window.innerWidth > 768) {
            cursor.style.display = 'block';
            cursor.style.left = mouseX - 10 + 'px';
            cursor.style.top = mouseY - 10 + 'px';
        }
    });
    
    // 悬停交互元素时放大光标
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .highlight-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
};

// 初始化视觉增强效果
setTimeout(addVisualEnhancements, 1000); 
<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-main">
        <p class="footer-text">
          {{ footerText.developed }}
        </p>
        <p class="footer-copyright">
          © 2023-2025 - <a href="https://pablo.space" target="_blank" rel="noopener noreferrer" class="footer-author-link">Pablo Murad</a>
        </p>
      </div>
      
      <div class="footer-links">
        <a href="/vault/" class="footer-link">Vault</a>
        <a href="/vault/guias/" class="footer-link">Guias</a>
        <a href="/vault/feedback" class="footer-link">Feedback</a>
      </div>
    </div>
    
    <!-- Decorative elements -->
    <div class="footer-decoration">
      <div class="decoration-line"></div>
    </div>
  </footer>
</template>

<script setup>
import { footerText } from '../../../.vitepress/constants'
</script>

<style scoped>
.custom-footer {
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
  border-top: none;
  padding: 2rem 0 1rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-main {
  text-align: center;
  flex: 1;
}

.footer-text {
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
  font-weight: 500;
  animation: fadeInUp 0.6s ease-out;
}

.footer-copyright {
  font-size: 0.9rem;
  color: var(--vp-c-text-3);
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

.footer-author-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
}

.footer-author-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--vp-c-brand-1);
  transition: width 0.3s ease;
}

.footer-author-link:hover {
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.footer-author-link:hover::after {
  width: 100%;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.footer-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--vp-c-brand-1);
  transition: width 0.3s ease;
}

.footer-link:hover {
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.footer-link:hover::after {
  width: 100%;
}

.footer-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  overflow: hidden;
}

.decoration-line {
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
  }
}
</style>
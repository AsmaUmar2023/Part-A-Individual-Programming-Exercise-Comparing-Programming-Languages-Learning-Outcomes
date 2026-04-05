# Part B: Individual Reflection Presentation Script
## Title: Evaluating the Future of Computing – Ethical and Security Challenges

**Duration: 15 minutes (~1,000 words)**

---

### 1. Introduction: The Evolving Landscape (1 minute)
Good morning everyone. Today, we stand at a critical juncture in the history of computing. As we move from traditional software paradigms to pervasive, AI-driven, and hyper-connected systems, the ethical and security challenges we face have shifted from being peripheral concerns to core engineering requirements. My presentation will focus on four primary challenges: algorithmic bias, privacy in large-scale models, quantum-era cybersecurity, and IoT vulnerabilities.

### 2. Challenge 1: Artificial Intelligence & Algorithmic Bias (3 minutes)
The most visible challenge in modern computing is the ubiquity of AI. However, as software engineers, we must recognize that AI models are not neutral. They inherit the biases present in their training data. 
- **The Issue:** Research on "Fairway" (Chakraborty et al., 2022) highlights that machine learning software can inadvertently discriminate in high-stakes areas like hiring or medical diagnosis. 
- **Professional Impact:** It is no longer enough to optimize for accuracy; we must optimize for fairness. This requires rigorous bias-testing as part of the standard CI/CD pipeline. 
- **Real-World Case:** We've seen facial recognition systems with higher error rates for minority groups, leading to wrongful arrests—a direct consequence of technical choices in data selection.

### 3. Challenge 2: Privacy in the Age of Big Data & LLMs (3 minutes)
Privacy has moved beyond "encryption at rest." In the era of Large Language Models (LLMs), our biggest challenge is preventing data leakage from the models themselves. 
- **The Issue:** Studies have shown that attackers can reconstruct "sanitized" or "differentially private" training data from model outputs with alarmingly high accuracy—up to 94% in some cases [8]. 
- **The Risk:** This creates a massive legal and ethical liability under frameworks like GDPR. 
- **Solution:** Implementing "Privacy by Design" means treating data protection as a fundamental constraint throughout the model's lifecycle, not an afterthought.

### 4. Challenge 3: Cybersecurity in the Quantum Era (3 minutes)
We are approaching the "Quantum Day," where current cryptographic standards (like RSA or ECC) may become obsolete. 
- **The Threat:** Quantum computers could potentially decrypt current data retroactively—an "encrypt now, decrypt later" strategy by adversaries. 
- **The Transition:** This necessitates a global shift to Quantum-Resistant Cryptography (QRC). 
- **Ethical Dimension:** Failing to update our security infrastructure today leaves the future digital lives of users unprotected. It is a professional failure to ignore this emerging threat.

### 5. Challenge 4: IoT & Edge Computing Vulnerabilities (2 minutes)
The expansion of computing to "the edge" via IoT (Internet of Things) creates a massive attack surface. 
- **The Issue:** Many IoT devices are built with minimal security to keep costs low. 
- **The Impact:** Botnets like Mirai have shown how millions of insecure devices can be weaponized. 
- **Professional Responsibility:** As developers, we must advocate for "Security by Default" in every connected product, regardless of its size or price point.

### 6. Mitigation Strategies: Ethics-by-Design & Policy (2 minutes)
How do we solve these issues? 
- **Technical Mitigation:** Incorporating fairness and privacy objectives directly into our optimization functions. 
- **Procedural Mitigation:** Establishing clear governance frameworks for AI development, as discussed by Baqar (2024), to ensure human accountability [3]. 
- **Regulatory Alignment:** Staying ahead of emerging laws (like the EU AI Act) ensures that our technical work is legally robust.

### 7. Conclusion: The Role of the Professional (1 minute)
In conclusion, the future of computing is not just about faster processors or larger models; it is about the responsible management of power. As computing professionals, our "small choices" in code—like how we handle a name or how we sanitize a dataset—carry immense social, legal, and ethical weight. By prioritizing readability, ethics, and security, we don't just build better software; we build a more equitable digital future. 

Thank you.

---

### References
- Baqar, M. (2024). Balancing Innovation and Ethics in AI-Driven Software Development. *arXiv*.
- Chakraborty, J., et al. (2022). Fairway: A Way to Build Fair ML Software. *arXiv*.
- Miah, M. A., et al. (2024). Ethical Considerations in AI and Information Technology Privacy and Bias. *ILPROM*.
- Aarti, N. A. (2024). Generative AI in Software Development: An Overview and Evaluation of Modern Coding Tools. *International Journal For Multidisciplinary Research*.

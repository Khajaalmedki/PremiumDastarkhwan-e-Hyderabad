'use client';
import { motion } from 'framer-motion';

export function FadeIn({
    children,
    delay = 0,
    duration = 0.8,
    className,
    direction = 'up',
    fullWidth = false
}) {
    const directions = {
        up: { y: 30, x: 0 },
        down: { y: -30, x: 0 },
        left: { y: 0, x: 30 },
        right: { y: 0, x: -30 },
        none: { y: 0, x: 0 }
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
            style={{ width: fullWidth ? '100%' : 'auto' }}
        >
            {children}
        </motion.div>
    );
}

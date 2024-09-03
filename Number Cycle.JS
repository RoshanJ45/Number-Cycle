<script>
        const thing = document.querySelector('.rotating-thing');
        let delta = 0;
        function next() {
            delta -= 0.01;
            thing.style.setProperty('--delta', delta);
            requestAnimationFrame(next);
        }
        requestAnimationFrame(next);
    </script>
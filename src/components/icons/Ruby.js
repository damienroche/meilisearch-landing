import * as React from 'react'

function SvgRuby({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.34 21.51a26.123 26.123 0 01-2.252 4.337l1.258 8.682.994-13.019zm-2.98 5.427c-1.318 1.889-2.83 3.646-4.416 5.333l5.954 5.284-1.538-10.617zm-5.061 5.933l-.31.286c-1.535 1.469-3.201 2.86-5.178 4.085l11.422.896-5.934-5.267zm-6.855 5.144a22.69 22.69 0 01-2.957 1.372l11.01-.74-8.053-.632zm-13.81-12.668l1.661 4.463 7.027-1.576L27.9 20.26l2.336-7.422-3.477-2.418-6.27 2.347a853.66 853.66 0 00-2.638 2.472l-.004.003-1.155 1.085c-.644.605-1.23 1.152-1.663 1.553a53.196 53.196 0 01-.69.627l-.052.043c-.02.03-.049.076-.086.139-.082.136-.194.332-.332.578-.274.49-.64 1.162-1.04 1.905-.664 1.233-1.42 2.656-2.004 3.756l-.225.423.032-.005zm5.316 13.387l.076.18 2.928-9.698-6.392 1.434c.071.145.15.315.237.504.297.65.685 1.558 1.107 2.568.672 1.611 1.432 3.491 2.043 5.012zm-5.61-6.51l.206-4.302.84 2.387-1.046 1.915zm-.088 2.04l.985-1.796-.387 4.611c-.327-.715-.548-1.632-.598-2.815zm4.887 4.806l-2.99-6.982-.506 6.034c.971 1.233 2.234 1.495 3.699 1.452l-.203-.504zm13.855-17.64c2.458 1.51 6.077 3.726 7.095 4.346-1.323 2.001-2.89 3.864-4.568 5.663l-2.527-10.01zm9.064-2.042L28.902 20l2.077-6.596 7.147 5.845-.068.138zm-9.999 1.924l2.615 10.357-10.225-3.285 7.61-7.072zM35.405 10.5l-3.374 1.864 7.294 1.024a4.303 4.303 0 00-1.108-1.603c-.647-.586-1.554-1.046-2.812-1.285zm4.198 3.813l-7.395-1.038 7.046 5.763c.437-1.532.659-3.24.349-4.725zm-5.966-3.851l-2.923 1.614-2.451-1.755 5.374.14zm-3.92 10.382a4828.025 4828.025 0 006.779 4.15 7.68 7.68 0 00.156-.238 22 22 0 00.836-1.469c.513-.977 1.04-2.117 1.34-3.051l-9.11.608zM19.713 29.74l-3 9.938c2.569-.327 4.867-1.131 6.981-2.256l-3.981-7.682zm10.677 2.774c-1.856 1.697-3.801 3.248-5.928 4.481l-3.98-7.678 9.908 3.197z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgRuby

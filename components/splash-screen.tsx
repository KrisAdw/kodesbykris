import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * Splash / loading screen — present from the very first paint (rendered
 * server-side, so the page content is never visible before it appears).
 *
 * Everything is pure CSS (no JS, no GSAP):
 * - The gray logo silhouette fills in with its real colors left → right,
 *   synced with the progress bar + percentage counter on one shared
 *   timeline (0.1s–1.6s), then a short hold, then fade out by ~2.4s.
 * - The overlay hides itself at the end of its own animation, so it can
 *   never get stuck even if JavaScript fails entirely.
 * - Skipped (display: none) for users who prefer reduced motion.
 */
export function SplashScreen() {
  return (
    <div
      aria-hidden
      className="splash-overlay fixed inset-0 z-100 flex flex-col items-center justify-center bg-background"
    >
      {/* Logo: gray silhouette + color layer that fills in left → right */}
      <div className="relative h-16 w-56">
        <div className="absolute inset-0">
          <Image
            src="/brands/Brand Logo.png"
            alt=""
            width={2063}
            height={633}
            className="h-full w-full object-contain grayscale dark:hidden"
          />
          <Image
            src="/brands/Brand Logo Dark.png"
            alt=""
            width={2119}
            height={672}
            className="hidden h-full w-full object-contain grayscale dark:block"
          />
        </div>
        <div className="splash-fill absolute inset-0">
          <Image
            src="/brands/Brand Logo.png"
            alt=""
            width={2063}
            height={633}
            className="h-full w-full object-contain dark:hidden"
          />
          <Image
            src="/brands/Brand Logo Dark.png"
            alt=""
            width={2119}
            height={672}
            className="hidden h-full w-full object-contain dark:block"
          />
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8 flex w-56 flex-col gap-3">
        <div className="h-0.5 w-full overflow-hidden rounded-full bg-line">
          <div className="splash-bar h-full w-full origin-left rounded-full bg-lime" />
        </div>
        <div className="flex items-center justify-between font-mono text-[0.65rem] tracking-wider text-neutral-500 uppercase">
          <span>{SITE.tagline}</span>
          <span className="splash-counter" aria-hidden />
        </div>
      </div>
    </div>
  );
}

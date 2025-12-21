import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot } from "../util/path"

type ProfileImageOptions = {
  src?: string
  alt?: string
  width?: number | string
  height?: number | string
  borderRadius?: number | string
  cacheBust?: boolean
}

export default ((opts?: ProfileImageOptions) => {
  const ProfileImage: QuartzComponent = ({ fileData, ctx }: QuartzComponentProps) => {
    const baseDir = pathToRoot(fileData.slug!)
    const baseSrc = joinSegments(baseDir, opts?.src ?? "profile_pic.jpg")
    const src = (opts?.cacheBust ?? true) ? `${baseSrc}?v=${ctx.buildId}` : baseSrc
    const alt = opts?.alt ?? "Profile picture"
    const style: Record<string, string> = {
      width: typeof opts?.width === "number" ? `${opts?.width}px` : opts?.width ?? "100%",
      height: typeof opts?.height === "number" ? `${opts?.height}px` : opts?.height ?? "auto",
      borderRadius:
        typeof opts?.borderRadius === "number"
          ? `${opts?.borderRadius}px`
          : (opts?.borderRadius as string) ?? "8px",
      display: "block",
    }

    return (
      <div class="profile-image">
        <img src={src} alt={alt} style={style} />
      </div>
    )
  }

  return ProfileImage
}) satisfies QuartzComponentConstructor<ProfileImageOptions>

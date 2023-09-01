import Image from "next/image";
type Props = {
  content: string;
  author: string;
  picture?: string;
};
export default function Message(props: Props) {
  return (
    <div className="flex flex-row">
      <div className="shrink-0 inline px-2">
        <Image
          src={props.picture || "/placeholder.svg"}
          width={64}
          height={64}
          alt="user icon"
        />
      </div>
      <div className="flex-col">
        <p>
          <strong>{props.author}</strong>
        </p>
        <div className="mr-40">{props.content}</div>
      </div>
    </div>
  );
}

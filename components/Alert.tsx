interface Props {
  value: string
}

export default function Alert({ value }: Props) {
  return <div className="text-red">{value}</div>
}

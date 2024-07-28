type Props = {
  text: string
  handleDelete: (value: string) => void
}

export default function DeleteButton({ text, handleDelete }: Props) {
  return <button onClick={() => handleDelete(text)}>❌</button>;
}

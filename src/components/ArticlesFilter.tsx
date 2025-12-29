type Props = {
    value: string;
    onChange: (value: string) => void;
  };
  
  export default function ArticlesFilter({ value, onChange }: Props) {
    return (
      <input
        type="text"
        placeholder="Filtrer les articles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-800"
      />
    );
  }
type Props = {
  selected: string;
  onChange: (scene: 'zoo') => void;
};

export default function SceneSelector({ selected, onChange }: Props) {
  return (
    <div style={{ padding: '1rem' }}>
      <label htmlFor="scene">Choose Scene:</label>
      <select
        id="scene"
        value={selected}
        onChange={(e) => onChange(e.target.value as 'zoo')}
      >
        <option value="zoo">Zoo</option>
        {/* Future: Add lake, garden, etc. */}
      </select>
    </div>
  );
}
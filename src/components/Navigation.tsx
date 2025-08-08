interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = ['PROJECTS', 'GROUPS', 'VIDEOS', 'CONTACT'];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex space-x-12 bg-surface/80 backdrop-blur-md border border-border px-8 py-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
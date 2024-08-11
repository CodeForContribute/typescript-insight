interface Person3 {
    id: string;
    name: string;
  }
  
  type Person3Record = Record<string, Person3>;
  
  const users: Person3Record = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

  
  // Initialize an empty Map
  const personsMap = new Map<string, Person3>();
  
  // Add users to the map using .set
  personsMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  personsMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(personsMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
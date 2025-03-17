<script>
	let name = "Svelte";
	let count = 0;
  
	const increment = () => {
	  count += 1;
	};
  
	const decrement = () => {
	  count -= 1;
	};
  </script>
  
  <style>
	h1 {
	  color: #ff3e00;
	}
	button {
	  background-color: #ff3e00;
	  color: white;
	  border: none;
	  padding: 10px 20px;
	  cursor: pointer;
	}
	button:hover {
	  background-color: #ff5733;
	}
	p {
	  font-size: 1.2rem;
	}
  </style>
  
  <main>
	<h1>Welcome to the Svelte App!</h1>
	<p>This is a basic page.</p>
	
	<div>
	  <p>Hello, {name}!</p>
	  <button on:click={increment}>Increment</button>
	  <button on:click={decrement}>Decrement</button>
	  <p>Count: {count}</p>
	</div>
  </main>
import "./App.css";

// import Intercom from "@intercom/messenger-js-sdk";

function App() {
    // Intercom({
    // 	app_id: "ei8bp2b2",
    // 	user_id: "deepali11221", // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
    // 	name: "deepali", // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
    // 	email: "deepali@askassembly.app", // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
    // 	created_at: 1704067200, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
    // });

	evaluationClient, _ := flipt.NewClient(
		flipt.WithURL("https://<environment>-<organization>.flipt.cloud"),
		flipt.WithClientTokenAuthentication(<api-key>),
		flipt.WithNamespace(<namespace>)
	)
    return <div className="App">my app</div>;
}

export default App;

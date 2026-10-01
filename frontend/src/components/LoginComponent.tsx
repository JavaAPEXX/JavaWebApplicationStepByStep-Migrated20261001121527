import React, { useState } from 'react';

type LoginComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const LoginComponent: React.FC<LoginComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'name': '',
        'password': '',
    });
    const { errorMessage } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="auth-card-container">
            <div className="modern-card auth-card">
                <nav className="navbar navbar-default">
        
        		<a href="/" className="navbar-brand">Brand</a>
        
        		<ul className="nav navbar-nav">
        			<li className="active"><a href="#">Home</a></li>
        			<li><a href="/list-todos.do">Todos</a></li>
        			<li><a href="http://www.in28minutes.com">In28Minutes</a></li>
        		</ul>
        
        		<ul className="nav navbar-nav navbar-right">
        			<li><a href="/login.do">Login</a></li>
        		</ul>
        
        	</nav>
        
        	<div className="container">
        		<form onSubmit={handleSubmit} action="/login.do" method="post">
        			<p>
        				<span>{errorMessage}</span>
        			</p>
        			Name: <input type="text" name="name" /> Password:<input type="password" name="password" /> <input type="submit" value="Login" />
        		</form>
        
        	</div>
        
        	<footer className="footer">
        		<div>footer content</div>
        	</footer>
        
        	<script src="webjars/jquery/1.9.1/jquery.min.js"></script>
        	<script src="webjars/bootstrap/3.3.6/js/bootstrap.min.js"></script>
            </div>
        </div>
    );
};

export default LoginComponent;

import { useState } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/sidebar";
import "./settings.css";
import { isProd } from "../../utils/isProd";

export default function Settings() {
	const user = useSelector((state) => state.auth.user);

	const uploadImage = async (data) => {
		const url = { url: data };
		const res = await fetch(isProd() + "/api/upload/setpicture", {
			method: "POST",
			headers: {
				token: localStorage.getItem("token"),
				"Content-Type": "application/json",
			},
			body: JSON.stringify(url),
		});
		if (res.ok) {
			window.location.href = "/settings";
		}
	};

	const deleteAccount = async (e) => {
		try {
			console.log(user.id);
			const res = await fetch(isProd() + `/api/users/${user.id}`, {
				method: "DELETE",
				headers: {
					token: localStorage.getItem("token"),
				},
			});
			if (res.ok) {
				localStorage.removeItem("token");
				window.location.href = "/";
			}
		} catch (error) {
			console.log(error);
		}
	};

	const fileChange = async (e) => {
		e.preventDefault();
		const files = e.target.files;
		const formData = new FormData();
		formData.append("image", files[0]);

		try {
			const res = await fetch(isProd() + "/api/upload", {
				method: "POST",
				headers: {
					token: localStorage.getItem("token"),
				},
				body: formData,
			});
			if (res.ok) {
				const json = await res.json();
				uploadImage(json);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateTitle'>Update Your Account</span>
					<span className='settingsDeleteTitle' onClick={deleteAccount}>
						Delete Your Account
					</span>
				</div>
				<form className='settingsForm'>
					<label htmlFor=''>Profile Picture</label>
					<div className='settingsPP'>
						<img src={user.profile_pic} alt='' />
						<label htmlFor='fileInput'>
							<i className='settingsPPIcon far fa-user-circle'></i>
						</label>
						<input
							type='file'
							style={{ display: "none" }}
							name='image'
							id='fileInput'
							onChange={fileChange}
						/>
					</div>
					<label htmlFor=''>Username</label>
					<input type='text' placeholder='enter new username...' />
					<label htmlFor=''>Email</label>
					<input type='email' placeholder='enter new email...' />
					<label htmlFor=''>Password</label>
					<input type='password' placeholder='enter new password...' />
					<button className='settingsSubmit' disabled>
						Update
					</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}

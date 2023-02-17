#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
  format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn anghr(h: f32, m: f32) -> f32 {
  (h * 30.0 + m / 2.0) - 90.0
}

#[tauri::command]
fn angmi(m: f32, s: f32) -> f32 {
  (m * 6.0 + s / 10.0) - 90.0
}

#[tauri::command]
fn angse(s: f32) -> f32 {
  (s * 6.0 + s / 10.0) - 90.0
}
#[tauri::command]
fn convert(n: f32, option: String) -> String {
  let result: String;
  match option.as_str() {
    "ctof" => {
      let val = (n * 9.0 / 5.0) + 32.0;
      result = format!("{}°C = {:.2}°F", n,val)
    }
    "ftoc" => {
      let val = (n - 32.0) * 5.0 / 9.0;
      result = format!("{}°F = {:.2}°C", n,val)
    }
    "mtocm" => {
      let val = n * 100.0;
      result = format!("{} mtr = {:.2} cm", n,val)
    }
    "cmtom" => {
      let val = n / 100.0;
      result = format!("{} cm = {:.3} mtr", n,val)
    }
    "kmtomile" => {
      let val = n / 1.6;
      result = format!("{} km = {:.3} mile", n,val)
    }
    "miletokm" => {
      let val = n * 1.6;
      result = format!("{} mile = {:.3} km", n,val)
    }
    "kgtolbs" => {
      let val = n * 2.2;
      result = format!("{} kg = {:.3} lbs (approx)", n,val)
    }
    "lbstokg" => {
      let val = n / 2.2;
      result = format!("{} lbs = {:.3} kg (approx)", n,val)
    }
    _ => {
      result = String::from("Not a valid option!")
    }
  }
  result
}

fn main() {
    tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![
        greet, anghr, angmi, angse, convert
      ])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}
